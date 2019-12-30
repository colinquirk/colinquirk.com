cd /home/colin/colinquirk.com
git clone https://github.com/colinquirk/colinquirk.com
Rscript -e 'blogdown::build_site()'
mv public /home/colin/site