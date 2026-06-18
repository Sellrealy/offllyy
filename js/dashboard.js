import { db, auth } from "./firebase-config.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    loadData();

});

async function loadData() {

    const tbody = document.getElementById("dataSong");

    tbody.innerHTML = `
        <tr>
            <td colspan="7" class="p-5 text-center">
                Loading...
            </td>
        </tr>
    `;

    const q = query(
        collection(db, "guestbooks"),
        orderBy("created_at", "desc")
    );

    const snapshot = await getDocs(q);

    let html = "";

    snapshot.forEach((item) => {

        const data = item.data();

        html += `
        <tr class="border-b hover:bg-purple-50">

            <td class="p-4">
                <img
                    src="${data.cover}"
                    class="w-16 h-16 rounded-xl">
            </td>

            <td class="p-4">${data.nama}</td>

            <td class="p-4">
                <b>${data.lagu}</b><br>
                <small>${data.artist}</small>
            </td>

            <td class="p-4">
                ${data.pesan}
            </td>

            <td class="p-4">
                <audio controls>
                    <source src="${data.preview}">
                </audio>
            </td>

<td class="p-4 flex gap-2">

    <a href="detail.html?id=${item.id}"
       class="bg-purple-400 text-white px-4 py-2 rounded-xl">
       👁 View
    </a>

    <button
        onclick="hapusData('${item.id}')"
        class="bg-red-400 text-white px-4 py-2 rounded-xl">

        🗑 Delete
    </button>

</td>
        </tr>
        `;
    });

    if (html === "") {

        html = `
        <tr>
            <td colspan="7" class="p-5 text-center">
                Belum ada data
            </td>
        </tr>
        `;
    }

    tbody.innerHTML = html;
}

window.hapusData = async (id) => {

    const yakin = confirm("Hapus data?");

    if (!yakin) return;

    await deleteDoc(
        doc(db, "guestbooks", id)
    );

    loadData();
};

window.logout = async () => {

    await signOut(auth);

    window.location.href = "login.html";
};