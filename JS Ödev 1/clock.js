let myName = prompt("İsminizi giriniz: ");

document.querySelector("#myName").innerHTML = myName.charAt(0).toUpperCase() + myName.slice(1);

let dayName = document.querySelector("#dayName");

function clock() {
    const today = new Date();
    let day = today.getDay(); // 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi

    // Gün isimlerini dizi ile belirleme
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    dayName.innerHTML = days[day]; // Gün ismini belirle

    // Saat, dakika ve saniye formatı
    let hours = today.getHours().toString().padStart(2, "0");
    let minutes = today.getMinutes().toString().padStart(2, "0");
    let seconds = today.getSeconds().toString().padStart(2, "0");

    let date = `${hours}:${minutes}:${seconds} ${dayName.innerHTML}`;

    document.querySelector("#myClock").innerHTML = date; // HTML'e yazdır
}

// İlk başta çalıştır
clock();

// Her saniyede bir güncelle
setInterval(clock, 1000);
