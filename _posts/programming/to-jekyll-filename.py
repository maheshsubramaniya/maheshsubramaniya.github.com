#!/usr/bin/env python3

import yaml
import os

def read_markdown_properties(markdown_file):
    with open(markdown_file, 'r') as file:
        lines = file.readlines()

    if lines[0].strip() == '---':
        end_line_index = lines[1:].index('---\n') + 1
        yaml_content = ''.join(lines[1:end_line_index])
        properties = yaml.safe_load(yaml_content)
        return properties
    else:
        return None

def get_filename_property(properties):
    return properties.get('filename')

def rename_file(original_file, new_name):
    if new_name:
        # Constructing new file path with the same directory as the original file
        dir_name = os.path.dirname(original_file)
        new_file_path = os.path.join(dir_name, new_name)
        os.rename(original_file, new_file_path)
        print(f"File renamed to: {new_file_path}")
    else:
        print("No 'filename' property found or it's empty. File not renamed.")

# Example usage
markdown_file = '/Users/msubra/dev/maheshsubramaniya.github.com/_posts/ai/Edge AI copy.md'  # Replace with your markdown file path
properties = read_markdown_properties(markdown_file)
if properties:
    new_filename = get_filename_property(properties)
    rename_file(markdown_file, new_filename)
else:
    print("No properties found or file does not start with YAML front matter.")