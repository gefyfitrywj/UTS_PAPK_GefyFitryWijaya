var dataBarang = [{
  nama_barang: "Nama",
  jumlah: "Hari",
  total: 0
}];

function showBarang() {
  var listBarang = document.getElementById("table");

  listBarang.innerHTML = "<tr><th>Nama</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='btn btn-warning' style='margin-right:5px;' onclick='editBarang(" + i + ")'><i class='bi bi-pencil-square'></i></a>";
      var btnHapus = "<a href='#' class='btn btn-danger' onclick='deleteBarang(" + i + ")'><i class='bi bi-trash3'></i></a>";
      listBarang.innerHTML +=
        "<tr><td>" + dataBarang[i].nama_barang + "</td><td>" + dataBarang[i].jumlah + "</td><td>" + dataBarang[i].total + "</td><td>" + btnEdit + btnHapus + "</td></tr>";
    } else {
      // listBarang.innerHTML +=
      // "<th>Data Belum Di Masukan</th>";
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;
}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == "Pocky") {
    const total = jumlah * 8000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Oreo") {
    const total = jumlah * 7000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Good Time") {
    const total = jumlah * 12000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Pocary") {
    const total = jumlah * 9000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Good Day") {
    const total = jumlah * 6000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Milo") {
    const total = jumlah * 210000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Lays") {
    const total = jumlah * 13000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };

  }
}

function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  dataBarang.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
  swal("Apakah anda yakin ?", {
    buttons: {
      cancel: "Batal!", catch: {
        text: "Hapus!",
        value: "Delete",
      },
      // defeat: true,
    },
  })
    .then((value) => {
      switch (value) {

        case "Cancel":
          swal("Data Canceled");
          break;

        case "Delete":
          dataBarang.splice(id, 1);
          showBarang();
          swal("", "Data Deleted!", "success");
          break;

        default:
          swal("Data Batal Dihapus");
      }
    });
  // dataBarang.splice(id, 1);

}

showBarang();


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function kembalian() {
  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const bayar = parseInt(document.getElementById("pembayaran").value);
  const total = sum;
  const kembalian = bayar - total;

  document.getElementById("kembalian").innerHTML = kembalian;
  document.getElementById("bayar").innerHTML = bayar;

}




function cetak() {
  // var listBarang = document.getElementById("table");

  // listBarang.innerHTML = "<tr> <th>Nama</th><th>Jumlah</th> <td></td> <th>Total</th></tr>";

  // for (let i = 0; i < dataBarang.length; i++) {
  //   if (i !== 0) {
  //     listBarang.innerHTML +=
  //       "<tr><td>"+ dataBarang[i].nama_barang +"</td><td>"+ dataBarang[i].jumlah +"</td><td>"+ dataBarang[i].total  +"</td></tr>";
  //   } else {
  //     // listBarang.innerHTML +=
  //     // "<th>Data Belum Di Masukan</th>";
  //   }
  // }

  // const sum = dataBarang.reduce((accumulator, object) => {
  //   return accumulator + object.total;
  // }, 0);

  // const totalBayar = document.getElementById("total_bayar");
  // totalBayar.innerHTML = sum;

  // const bayar = parseInt(document.getElementById("pembayaran").value) ;
  // const total = sum ;
  // const kembalian = bayar - total ;
  window.print();

}