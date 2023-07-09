const seleksiNilai = (nilaiAwal,nilaiAkhir,dataArray = []) => {

    if(typeof nilaiAwal != "number" || typeof nilaiAkhir != 'number') {
        console.log("Yang anda masukan bukan angka");
        return; 

    } else if(nilaiAwal > nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal');
        return;

    } else if(dataArray.length < 5) {
        console.log("data dalam array harus berisi lebih dari 5");
        return;
    }

    const results = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir);
   

    if(results.length == 0 ) {
        console.log('Data tidak ditemukan');
    } else {
        console.log(results.sort());
    }
}

 seleksiNilai(0,10,[9,2,7,4,8,6,10,22,33,44]);


// jika nilai yang dimasukan bukan angka
// seleksiNilai('string',5,[1,2,3,4,5,6])

// jika nilai awal lebih besar dari nilai akhir
// seleksiNilai(5,1,[1,2,3,4,5,6])

// jika angka data didalam array kurang dari 5
// seleksiNilai(1,5,[1,2,3,4])

// jika hasilnya tidak ada
// seleksiNilai(0,2,[4,5,6,7,6,7,5])
