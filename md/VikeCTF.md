#### Web/vikemerch
Uses Golang
`filepath.Clean() function in Go language used to return the shortest path nameequivalent to the specified path` . It **does not** sanitize input to prevent path traversal. Request every file in the you know is in the directory. Even if some files don't work, some will. The `html/template` library for golang makes it so that every user input handled by it will be encoded in html entity before processing it. That prevents XSS.

#### Web/moviedb
robots.txt shows the flag location but it turns out that it was a folder.
If you requested `static/flag.txt`, it'll return `no` but if you request `static/flag.txt/` as a directory, it'll return the flag. The actual intended solution seems to be an SSTI though.
Key takeaway, test XSS, SSTI and injections for every param and user inputs. The SSTI injection point for this one was in the filter values. You just gotta test out every param u can.
Test code: `{{7*7}}`
Solution payload: `{{lipsum.__globals__.os.popen('cat static/flag.txt').read()}}` 
