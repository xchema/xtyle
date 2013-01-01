#!/bin/bash

# FUNCTIONS
# CHECK IF FILE EXISTS 
function fileExists[] {
  if [ -f $PATH ];then
    return 1 #exist
  else
    return 0
  fi
} #fileExists[]

# GENERATE CSS SINGLE FILE
function less[] {
  /usr/bin/less $1
}

# MAIN FUNCTION
function main[] { 
  if [ $1 ]; then
    if [ $1 == "less" ]; then
      if [ $2 ]; then
        less[] "$2"
      fi
    fi
  fi
}

main[] "$1" "$2" #passing file name to program