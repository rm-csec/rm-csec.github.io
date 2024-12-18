Were you wondering what the answers to our challenges were? No one would be checking this, but in case someone does, here they are.

#### crypto/based
Recognize base64 encoding (you can use [dCode Identify](https://www.dcode.fr/cipher-identifier) to find the type of cipher) and use [CyberChef](https://gchq.github.io/CyberChef/) to decode.  
> rmctf{base64_is_easy!}

#### crypto/rotgoescrazy1
Recognize rot13 (Caesar Cipher) and use CyberChef to decode.
> rmctf{Isn7_13_w4y_700_Much}

#### crypto/rotgoescrazy2
Recognize Caesar Cipher and use CyberChef ROT Brute Force.
> rmctf{why_30_5p3c1f1c4lly}

#### crypto/rotgoescrazy3
Recognize base64 then Caesar Cipher. Use CyberChef to decode.
vqgxj{q0v3_5x3t5_q0v3_w3gyvi?}
> rmctf{m0r3_5t3p5_m0r3_s3cure?}

#### crypto/vinegar
Although it seems like Caesar Cipher, there's many other ciphers out there. This one sounds similar to Vigenère. Use CyberChef or dCode with password/key "guesswhat" to decipher.
> rmctf{wh47_7he_v1n3g4r}

#### osint/geoguessing/church
Use Google's image reverse search. Find "The Church of Our Lady of Buda Castle". Go to maps and search. Right click and get coordinates.
> rmctf{47.502,19.034}

#### osint/geoguessing/bridge
Use Google's image reverse search. Find "Sydney Harbour Bridge". Go to maps and search. Look at the angle and foreground of the picture. Locate where you're standing, which is on the edge of Blue Point Rd. Right click and get coordinates.
> rmctf{-33.849,151.204}

#### osint/geoguessing/lake
Use Google's image reverse search. Some may find "Lake Pukaki". By analyzing the picture, the bollard hints you're in New Zealand. This connects to Lake Pukaki, so we search there.
Angling the lake and roadlines, we would be towards the bottom left of the lake. Cross referencing everything in the picture confirms our location.
> rmctf{-44.188,170.134}

#### osint/leaked
A leaked flag in our project on our GitHub page. By being familiar with GitHub's commits, save in history. Go back to rm.csec, to rm.csec.github.io, then check commit history. You'll find "I wonder what this is" commit, which will reveal the flag.
> rmctf{plz_r3m0v3_ap1_k3y5_b4_c0mm17}

#### osint/socialsearching
Be aware to search the whole internet, that's OSINT for you. With information such as "Snies" and "songs he listened", it is biased toward searching a music application, commonly Spotify or SoundCloud. 
Looking through users named Snies on Spotify. We find a suspicious playlist of "?" on one of the exactly named account. A list of songs, "r", "m", "c"...
all spell out the flag's name through each song's first letter. 
> rmctf{5PO7iFY_0S1NT_CH4LL3N9E}

#### forensics/corruptedfile
Huh, we can't open the file. You download the file then use CyberChef or [HexEd.it](https://hexed.it/). You upload the .jpg to view it's hex values. The first four values "00 00 00 00" are gone. This is the file signature, which has been corrupted.
We look up .jpg file signature "FF D8 FF E0" which would match our file type. Replace the first four with our signature. Redownload then view and find flag.
> rmctf{c0rrup7ed_fil3}

#### forensics/docxnzip
Based on the title of our challenge. We recognize a .docx file. We can unzip this file in CyberChef to find flag.png.
> rmctf{z1pf1l3_jump5c4r3}

#### forensics/meta_info
Based on title of our challenge. We extract the metadata of the file. Download the image. Use CyberChef or [exif.tool](https://exif.tools/) to find flag in image description.
> rmctf{m3t4d5t4}
