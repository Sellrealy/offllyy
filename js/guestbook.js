import { db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.getElementById("songForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        await addDoc(collection(db, "guestbooks"), {

            nama: document.querySelector('[name="nama"]').value,
            lagu: document.getElementById("lagu").value,
            artist: document.getElementById("artist").value,
            cover: document.getElementById("cover").value,
            preview: document.getElementById("preview").value,
            pesan: document.querySelector('[name="pesan"]').value,
            created_at: serverTimestamp()

        });

        alert("Song berhasil dikirim 💜");

        document.getElementById("songForm").reset();
        document.getElementById("selectedSong").innerHTML = "";

    } catch (err) {

        console.error(err);
        alert("Gagal mengirim");

    }

});