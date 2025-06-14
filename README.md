## 🚀 Özellikler

- ✅ JWT tabanlı kullanıcı kaydı ve girişi
- ✅ Çoktan seçmeli quiz oluşturma (A, B, C, D seçenekleri ile)
- ✅ Canlı oturum başlatma ve PIN (sessionId) ile oyuncu katılımı
- ✅ Gerçek zamanlı Socket.io iletişimi
- ✅ Her soru için geri sayım ve cevap gönderme
- ✅ Doğru cevaba göre puanlama ve skor tablosu
- ✅ Mobil ve masaüstü uyumlu EJS arayüzleri

---

## 🧠 Oyun Akışı

1. Eğitmen giriş yapar ve quiz oluşturur.
2. “Quiz List” sayfasından bir quiz seçip oturum başlatır.
3. Oyuncular `/join` sayfasından session ID (PIN) girerek katılır.
4. Eğitmen oyunu başlatınca sorular sırayla gönderilir.
5. Oyuncular cevap verir, süre sonunda skor tablosu görüntülenir.
6. Son soru bitince quiz tamamlanır.

---

## 🛠 Kullanılan Teknolojiler

| Alan          | Teknoloji            |
|---------------|----------------------|
| Backend       | Node.js, Express.js  |
| Gerçek Zaman  | Socket.io            |
| Veritabanı    | MongoDB + Mongoose   |
| Kimlik        | JWT + Cookie-Parser  |
| Arayüz        | EJS (Server-rendered)|
| Stil          | Basit HTML/CSS       |

## 📁 Proje Yapısı


├── models/             # Mongoose şemaları (User, Quiz)
├── routes/             # Express yönlendirmeleri
├── controllers/        # İş mantığı
├── socketHandlers/     # Socket.io olayları (host & player)
├── views/              # EJS şablonları
├── sessionStore.js     # Oturum verileri (memory)
├── app.js              # Ana uygulama dosyası
├── .env                # Gizli bilgiler (JWT\_KEY vb.)

## 🧪 Örnek Kullanıcı Akışı

* `/register` → yeni kullanıcı oluştur
* `/login` → giriş yap
* `/api/createQuiz` → quiz oluştur
* `/api/quizList` → quiz seç ve başlat
* `/join` → oyuncu girişi

## ✨ Geliştirilecek Özellikler

* [ ] Zaman bazlı puanlama
* [ ] Quiz geçmişi görüntüleme
* [ ] Admin dashboard
* [ ] Gerçek zamanlı sıralama animasyonları

## 📄 Lisans

Bu proje eğitim amaçlıdır. İstenirse MIT lisansı ile paylaşılabilir.


