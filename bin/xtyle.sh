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
  # /usr/bin/less $1
  # call less.awk to create file
  echo "less called for file \"$1\""
}

# PROGRAM HELP
function help[] {
  # how to use the program
  echo "help called"
}

# MAIN FUNCTION
function main[] { 
  if [ $1 ]; then
    if [ $1 == "less" ]; then
      if [ $2 ]; then
        less[] "$2"
      fi
    fi
    if [ $1 == "help" ]; then
      help[]
    fi
  fi
}

main[] "$1" "$2" #passing file name to program


# ^[\s]*@import.*.less";$
# sed -n "/\(@import\).*\(.less\)/p" xtyle.less 
# sed -n "/\(@import \"\).*\(.less\)/p" xtyle.less | sed -e "s/@import \"//g" -e "s/.less\";/.less/g" -e "s/^[ \t]*//g"