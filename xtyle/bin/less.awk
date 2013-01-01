BEGIN { print "File\tOwner","}
{ print $8, "\t", $3}
END { print " - DONE -"}