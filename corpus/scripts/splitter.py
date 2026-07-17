#!/usr/bin/env python3
import pandas as pd
import sys
import os

def factor_code(value):
    parts = str(value).split('-')
    return ''.join(part[0] for part in parts if part)

def split_csv_by_factors(input_file):
    if not os.path.isfile(input_file):
        print(f"Error: File '{input_file}' not found.")
        sys.exit(1)

    try:
        df = pd.read_csv(input_file, encoding="latin-1")
    except Exception as e:
        print(f"Error reading CSV: {e}")
        sys.exit(1)

    required_cols = {'verb', 'force', 'comp'}
    missing = required_cols - set(df.columns)
    if missing:
        print(f"Error: Missing required columns: {', '.join(sorted(missing))}")
        sys.exit(1)

    df['Factors'] = df['verb'].astype(str) + '-' + df['force'].astype(str) + '-' + df['comp'].astype(str)

    output_dir = "../data/exp_files/"
    os.makedirs(output_dir, exist_ok=True)

    base_name = os.path.splitext(os.path.basename(input_file))[0]

    for factor_value, group_df in df.groupby('Factors'):
        safe_value = factor_code(factor_value)
        output_file = os.path.join(output_dir, f"{base_name}_{safe_value}.csv")
        group_df.to_csv(output_file, index=False)
        print(f"Created: {output_file}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python splitter.py <input_file.csv>")
        sys.exit(1)

    input_csv = sys.argv[1]
    split_csv_by_factors(input_csv)