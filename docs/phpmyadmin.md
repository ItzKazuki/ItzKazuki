
# Phpmyadmin

Phpmyadmin adalah program yang bisa mengontrol database mysql kamu, mysql sangat berguna jika kita __malas__ untuk menggunakan CLI dari mysql/mariadb. Bagaimana sih cara installnya?

## Pemasangan
pertama download [phpmyadmin](https://phpmyadmin.net) di browser. jika kamu di Linux/Ubuntu gunakan:
```
$ wget https://files.phpmyadmin.net/phpMyAdmin/5.2.1/phpMyAdmin-5.2.1-all-languages.zip
```
jangan lupa ekstrak file nya.
setelah itu, taruh isi dari folder phpmyadmin ke folder `htdocs` atau `/var/www/`

setelah itu copy config.sample.inc.php ke config.inc.php
```
$ cp config.sample.inc.php config.inc.php
```

ubah bagian **First server** menjadi seperti ini:
```
/**
 * First server
 */
$i++;
/* Authentication type */
$cfg['Servers'][$i]['auth_type'] = 'cookie';
/* Server parameters */
$cfg['Servers'][$i]['host'] = 'db-1.fikq-store.xyz';
$cfg['Servers'][$i]['connect_type'] = 'tcp';
$cfg['Servers'][$i]['compress'] = false;
/* Select mysqli if your server has it */
$cfg['Servers'][$i]['extension'] = 'mysql';
$cfg['Servers'][$i]['AllowNoPassword'] = false;

/*
* Second server
*/
$i++;
/* Authentication type */
$cfg['Servers'][$i]['auth_type'] = 'cookie';
/* Server parameters */
$cfg['Servers'][$i]['host'] = 'db-2.fikq-store.xyz';
$cfg['Servers'][$i]['connect_type'] = 'tcp';
$cfg['Servers'][$i]['compress'] = false;
/* Select mysqli if your server has it */
$cfg['Servers'][$i]['extension'] = 'mysql';
$cfg['Servers'][$i]['AllowNoPassword'] = false;

/*
* Third server
*/
$i++;
/* Authentication type */
$cfg['Servers'][$i]['auth_type'] = 'cookie';
/* Server parameters */
$cfg['Servers'][$i]['host'] = 'db-3.fikq-store.xyz';
$cfg['Servers'][$i]['connect_type'] = 'tcp';
$cfg['Servers'][$i]['compress'] = false;
/* Select mysqli if your server has it */
$cfg['Servers'][$i]['extension'] = 'mysql';
$cfg['Servers'][$i]['AllowNoPassword'] = false;

/*
* Fourth server
*/
$i++;
/* Authentication type */
$cfg['Servers'][$i]['auth_type'] = 'cookie';
/* Server parameters */
$cfg['Servers'][$i]['host'] = 'db-4.fikq-store.xyz';
$cfg['Servers'][$i]['connect_type'] = 'tcp';
$cfg['Servers'][$i]['compress'] = false;
/* Select mysqli if your server has it */
$cfg['Servers'][$i]['extension'] = 'mysql';
$cfg['Servers'][$i]['AllowNoPassword'] = false;
```

ubah bagian **host** dengan domain mysql kamu!
Selesai :)

## Mysql to public
gimana sih cara agar mysql server kamu bisa di akses di public? gini caranya:

> Peringatan: ubah password dari user root anda, jangan dibiarkan kosong agar tidak mudah di hack!

pertama pastikan port `3306` sudah di buka

buka file `/etc/mysql/mariadb.conf.d/50-server.cnf` dan ubah bagian `bind-address` dengan ip public kamu.

```
$ nano /etc/mysql/mariadb.conf.d/50-server.cnf
```
contohnya seperti ini:
```
from:
bind-address=   127.0.0.1

to: 
bind-address=   your-public-ip

bind-address=   88.99.223.431
```

setelah selesai, restart mysql kamu dan coba connect di perangkat lain, selesai!

