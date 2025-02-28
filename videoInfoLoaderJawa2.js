  fetch('https://asrama-online-json-default-rtdb.asia-southeast1.firebasedatabase.app/jawa.json?t=' +
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

                    var playerElement = document.getElementById("clappr-player");

                    var player = new Clappr.Player({
                        source: data.video_stream,
                        poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhT7s0cSfA678UcsIh-A0kXuwot9C9y9GuQxhwojqM2jYZq_K9Zycog_a0NhhSBrA0Ke6c3M6QotHBa2wliX98SLo3D_XoNdqhZkQIelBOcSMkrgH3zDc_m-MIb79rj3R7UrMEzd0U4jUeH-XJ3Gnwnb4VnzKi9BbHi4bdFtoLH1UjUxCeixeQQEawfqlsA/s16000/BACKGROUND%20TEMA%20QURAN2.png",
                        width: '100%',
                        height: '100%',
                        autoPlay: false,
                        youtubeShowRelated: true,

                        plugins: {
                            playback: [YoutubePlayback]
                        }
                    });

                    player.attachTo(playerElement);

                })
                .catch(error => console.error('Error fetching data:', error));
