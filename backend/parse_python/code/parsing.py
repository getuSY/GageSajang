import csv
from dbfpy import dbf
import os
import sys

csv_fn = "all.csv"

with open(csv_fn, 'wb') as csvfile:
    for file_name in os.listdir('.'):

        if file_name.lower().endswith('.dbf'):

            print("Converting %s to csv" % file_name)

            in_db = dbf.Dbf(file_name)

            out_csv = csv.writer(csvfile)

            for rec in in_db:
                out_csv.writerow(rec.fieldData)

            in_db.close()

            print("Done...")



        else:

            print("Filename does not end with .dbf")