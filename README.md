# Appointment_Angular
 Beklenen fonksiyonlar: • Kendi için taklit servisler ile çalışması (Mock Api) • Sayfa yönlendirme (Routing) • Kimlik doğrulama sistemi (Authentication) • Ortam değişkenleri barındırması (örn: test, production vs) • Ekranlar:  Giriş Randevular Randevu Ekle Randevu Güncelle 

Öncelikle default bir angular projesi oluşturuyoruz. Oluşturduğumuz projede environment.ts dosyasını localde, environment.prod.ts dosyasını ise canlıda çalışacak şekilde ayarlıyoruz.(aynı parametreler farklı veriler).Src->App altında helpers, models,services ve views klasörlerini ekliyoruz. helpers içine eklediğimiz auth.guard.ts dosyasında login kontrolünü yapıyoruz ve bu kontrolü Src->app ->app-routing.module.ts de tanımladığımız pathlerden login işlemi gerektirenlere ekliyoruz. Models: apiden gelen verilere karşılık gelecek objeler içi kullanacağım objelere için oluşturdum ancak verimli bir şekilde kullanamadım. Service: burda apiye erişmek için gerekli olan servislerimiz mevcut api.service.ts : bütün http tiplerine göre oluşturululmuş methodların bulunduğu ve diğer servisleri besleyen base servis appointment.service.ts: randevular için crud işlemleri içeren servistir. login.service.ts: login ve logout işlemlerini yaptığımız servistir. views: bu klasörde var olan ekranlarımız(html),tasarım kodları(scss,css vb.) ve bu ekranlar için gerekli işlemlerin yapıldığı component.ts dosyaları işlevine göre gruplanmış bir şekilde bulunmaktadır.

Src->app altındaki app.component.(ts-html-ts) master sayfamızın tasarım,işlem ve html kodlarını içermektedir. index.html den farkı ts dosyasına sahip olması diyebilir.

Bu projede istedilen moc api ile daha önce çalışmadığımdan dummy veri almak için jwt-bearer ile çalışan daha öcne yazmış olduğumu bir api yi biraz değiştiridim https://github.com/srdrblk/Appointment_Api bu linkten ona ulaşabilirsiniz.

CVS: Node.js , Visual Studio Code , Angular 9

Contact: serdarbilek@outlook.com
