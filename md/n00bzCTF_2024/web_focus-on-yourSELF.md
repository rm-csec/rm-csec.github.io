## Web/Focus on yourSELF
#### Category: Web
#### Points: 429
#### Challenge Description: `Have you focused on yourself recently? Author: NoobHackers`
#### Attachment: `docker-compose.yml`

The site's endpoint `/view?image=` is vulnerable to LFI(Local File Inclusion).
Test payload: `/view?image=../../../../../../../etc/passwd`
It works and gives us the contents of /etc/passwd in the img tag of the response HTML as base64 data.
We can simply decode it and read the contents of the file.
The challenge title is `Focus on yourSELF` with the word "self" in all caps.
This is probably refering to the `/proc/self/environ` which contains all environment variables within the context of the current process.
So, we simply just read the file by sending a GET request to `/view?image=../../../../../../../etc/passwd` and decoding the value found in the img tag.
#### Flag: `n00bz{Th3_3nv1r0nm3nt_det3rmine5_4h3_S3lF_9fa0b845205e}`
