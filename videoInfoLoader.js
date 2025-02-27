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

                    var playerElement = document.getElementById("clappr-player");

                    var player = new Clappr.Player({
                        source: data.video_stream,
                        // source: 'VeZJOE8tIwE',
                        // poster: 'https://i.ytimg.com/vi/nfWlot6h_JM/hqdefault.jpg',
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
