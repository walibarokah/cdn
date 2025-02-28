fetch('https://asrama-online-json-default-rtdb.asia-southeast1.firebasedatabase.app/indo.json?t=' +
                    new Date()
                    .getTime())

                .then(response => response.json())
                .then(data => {
                    document.getElementById('info').innerText = data.info;
                    document.getElementById('nama_pengajar').innerText = data.nama_pengajar;
                    document.getElementById('tahun_m').innerText = data.tahun_m;
                    document.getElementById('tahun_h').innerText = data.tahun_h;
                    document.getElementById('mulai_ngaji').innerText = data.mulai_ngaji;
                    document.getElementById('akhir_ngaji').innerText = data.akhir_ngaji;
                    document.getElementById('mulai_deres').innerText = data.mulai_deres;
                    document.getElementById('akhir_deres').innerText = data.akhir_deres;

                    var audio = document.getElementById('hls-audio');
                    if (Hls.isSupported()) {
                        var hls = new Hls();
                        hls.loadSource(data.audio_stream);
                        hls.attachMedia(audio);
                    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
                        audio.src = data.audio_stream;
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
