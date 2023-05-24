
# Port Forward

Port forward adalah aplikasi yang ada di dalam router/modem kamu. port forward berfungsi untuk meneruskan port, dari port 8080 ke port 80. port forward juga berguna untuk meneruskan ip private ke ip public. sebelum port forward, lebih baik ubah ip dari perangkat yang ingin di forward menggunakan ip statis, agar ip nya nantinya tidak berubah ubah. sebelum lanjut ke port forward mari kita kenalan dulu sama public ip, private ip, statis ip, dan ip dinamis.

## Ip public, private, statis, dan dinamis

### A. Ip public
IP public adalah IP yang bisa diakses langsung oleh internet. IP public diperlukan oleh semua hardware agar bisa mengakses dan diakses dari internet, seperti router atau server website.
Ip public dibuat oleh provider dari internet itu (contohnya indiho**). Ip public akab berubah jika router di reboot/restart.


### B. Ip private
Ip private adalah IP yang dibuat langsung oleh router/modem. Ip private berada di lingkup *router* saja, makannya kita membutuhkan **port forward**. IP private akan berubah saat router di restart. tetapi jika ip private kamu berbentuk ip statis, ip private tidak dapat berubah walaupun router di *reboot*. Ip private biasanya menggunakan ip antara `192.168.0.1`-`192.168.0.100`.

### C. Ip statis
Ip statis adalah ip yang tidak dapat berubah ubah, untuk dapat membuat ip statis, kamu harus login ke admin webpage router. biasanya menggunakan ip: `192.168.0.1` atau `192.168.1.1`. *untuk password lihat belakang router/modem biasanya tertera password dan username login nya*

### D. Ip dinamis
Ip dinamis adalah ip yang berubah ubah. Ip ini bisa berubah jika router/modem di restart.

## Port Forward
karna kelian sudah paham mengenai ip statis, dinamis, private, public. lanjut nih ke port forward nya.

cara pertama yaitu mengetahui ip private dari device kamu. caranya lihat di `settings > wifi settings` atau `settings > tentang ponsel > detail informasi`. biasanya diawali dengan angka `192.168.x.x`.

login ke admin router, cek belakang router untuk melihat *ip login, username, dan password*.

setelah itu set ke ip statis agar saat router di restart tidak berubah.

cari di google cara port forward dan selesai: (ga ada contoh router indihom, wifi w kek eek ga bisa public ip :>)