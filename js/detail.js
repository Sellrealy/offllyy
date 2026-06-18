import { db } from "./firebase-config.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

if (!id) {
    document.body.innerHTML = `
        <h1>ID tidak ditemukan</h1>
    `;
}

async function loadDetail() {

    const docRef = doc(
        db,
        "guestbooks",
        id
    );

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {

        document.body.innerHTML = `
            <h1>Data tidak ditemukan</h1>
        `;

        return;
    }

    const data = docSnap.data();

    document.getElementById("cover").src = data.cover;

    document.getElementById("lagu").innerText = data.lagu;

    document.getElementById("artist").innerText =
        "🎤 " + data.artist;

    document.getElementById("pesan").innerText =
        data.pesan;

    document.getElementById("nama").innerText =
        "👤 " + data.nama;

    document.getElementById("preview").src =
        data.preview;
}

loadDetail();