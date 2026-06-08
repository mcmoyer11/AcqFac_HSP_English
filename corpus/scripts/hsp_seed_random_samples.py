import pandas as pd
import numpy as np
from collections import defaultdict, Counter

# --- PARAMETERS ---
input_file = "extracted_output_processed.csv"
group_cols = ["verb", "force", "comp"]
n_samples_per_group = 15
custom_seeds = [23, 1989, 666, 511, 525, 8138, 4111, 13, 1, 25]

# --- VALIDATION ---
if len(custom_seeds) != 10:
    raise ValueError("You must provide exactly 10 seed values.")

# --- LOAD DATA ---
df = pd.read_csv(input_file)

# --- GROUPING ---
groups = df.groupby(group_cols)

# --- CHECK GROUP SIZE ---
too_small = [(name, len(group)) for name, group in groups if len(group) < n_samples_per_group]
if too_small:
    msg_lines = [f"{len(too_small)} group(s) have fewer than {n_samples_per_group} items:"]
    for name, size in too_small:
        msg_lines.append(f"  Group {name} has {size} item(s)")
    raise ValueError("\n".join(msg_lines))

# --- SAMPLING LOOP WITH FILE OUTPUT ---
sampled_sets = []
id_by_seed = defaultdict(list)

for i, seed in enumerate(custom_seeds):
    sampled = (
        groups.apply(lambda g: g.sample(n=n_samples_per_group, replace=False, random_state=seed))
        .reset_index(drop=True)
    )
    sampled["Sample_Set"] = seed

    # Save individual sample
    output_filename = f"sample_set_seed_{seed}.csv"
    sampled.to_csv(output_filename, index=False)

    # Track and store
    sampled_sets.append(sampled)
    id_by_seed[seed] = sampled["unique_id"].tolist()

# --- COMBINED FILE (optional) ---
final_samples = pd.concat(sampled_sets, ignore_index=True)
final_samples.to_csv("all_sample_sets_combined.csv", index=False)

# --- SAVE unique_id → seed mapping ---
id_map_df = pd.DataFrame([
    {"seed": seed, "unique_id": uid}
    for seed, ids in id_by_seed.items()
    for uid in ids
])
id_map_df.to_csv("unique_ids_by_seed.csv", index=False)

# --- FIND DUPLICATES ---
all_ids = [uid for ids in id_by_seed.values() for uid in ids]
id_counts = Counter(all_ids)
duplicates = [uid for uid, count in id_counts.items() if count > 1]
pd.DataFrame({"duplicate_unique_id": duplicates}).to_csv("duplicate_unique_ids.csv", index=False)

# --- CREATE MATRIX: unique_id × seed (presence = 1) ---
all_unique_ids = sorted(set(all_ids))
matrix_data = {
    seed: [1 if uid in id_by_seed[seed] else 0 for uid in all_unique_ids]
    for seed in custom_seeds
}
matrix_df = pd.DataFrame(matrix_data, index=all_unique_ids)
matrix_df.index.name = "unique_id"
matrix_df.to_csv("unique_id_matrix.csv")
