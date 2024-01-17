Spor hocan için hazırladığın alışveriş sitesine bot'lar dadandı. Sürekli sitenden bazı sayfaları açıp server kaynaklarını tüketiyorlar ve gereksiz maliyet çıkarıyorlar.

Bunu engellemek için login formu eklemek aklına geldi. Login olamayan sitede gereksiz yer içerikleri tıklayarak gezinemeyecek.

Login.jsx component'inde aşağıdakileri yaparak login özelliğini sayfana ekleyebilirsin.

[ ] form bilgilerini tutmak için bir state tanımlayın.
[ ] handleChange fonksiyonu yazarak form elemanlarındaki değişikliklerde state'i güncelleyin. [ ] handleChange'i form elemanlarına doğru event olarak bağlayın.
[ ] handleSubmit fonksiyonu yazın ve form submit olduğunda sayfanın yenilenmesini engelleyin. [ ] handleSubmit'de axios ile 'https://6540a96145bedb25bfc247b4.mockapi.io/api/login' adresine get isteği atın. gelen listede eğer formdaki email ve password'e sahip biri var ise '/main' sayfasına yönlendirin yoksa '/error' sayfasına yönlendirin.

test için erdem.guntay@wit.com.tr adresini 9fxIH0GXesEwH_I şifresini kullanabilirsin.

İpucu: useHistory'yi kullanabilirsin.
İpucu: form datasını güncellerken state'deki halini spread operatörü (...) ile kopyalayabilirsin.
