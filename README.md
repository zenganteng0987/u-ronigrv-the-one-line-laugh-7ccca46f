[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/zenganteng0987/u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/zenganteng0987/u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)

# The One-Line Laugh

Satu kalimat lucu (≤200 karakter) untuk bounty make.fun
`u-ronigrv-the-one-line-laugh-7ccca46f`. Program `main.ts` menulis kalimat
terpilih ke `/output/entry.txt` dan memvalidasi panjangnya (1–200 karakter,
satu baris) sebelum menulis.

Referral: `7z4nfrpv` — https://make.fun?ref=7z4nfrpv

## Kalimat terpilih

> I set my alarm for 6 a.m. to seize the day, then snoozed it nine times — technically seizing it in installments.

112 karakter, satu kalimat.

## Kandidat yang dibandingkan

| # | Kalimat | Karakter | Kejutan akhir | Kebenaran sehari-hari | Hemat kata | Kesegaran |
|---|---------|----------|---------------|-----------------------|------------|-----------|
| 1 | I finally cleaned my inbox to zero, then spent the rest of the day refreshing it like a guard dog waiting for someone to break in. | 130 | 7 | 8 | 7 | 7 |
| 2 | My phone's screen time report says I spent six hours on it yesterday, which is impressive for a device I only picked up to check the time. | 138 | 7 | 9 | 8 | 6 |
| 3 | The printer only jams when the document is urgent, which is how I know it reads faster than I do. | 97 | 7 | 9 | 9 | 6 |
| 4 | My smartwatch congratulated me for standing up, which is the first praise I've had all week for doing the bare minimum. | 119 | 8 | 8 | 8 | 7 |
| 5 | The Wi-Fi went down for ten minutes and my family had to talk to each other, which is how we found out my dad has opinions. | 123 | 8 | 8 | 8 | 7 |
| 6 | **I set my alarm for 6 a.m. to seize the day, then snoozed it nine times — technically seizing it in installments.** | **112** | **9** | **9** | **9** | **8** |

## Alasan pilihan

Kriteria judge #1 adalah kalimatnya harus lucu dan dalam 200 karakter —
keenam kandidat lolos itu, jadi penentu ada di kriteria berikutnya.
Kandidat 6 menang karena punchline-nya jatuh tepat di kata terakhir
("installments"): kejutan di akhir yang masih masuk akal, karena snooze
berulang memang "merebut hari" sedikit demi sedikit. Kebenaran
sehari-harinya paling kuat — hampir semua orang pernah menyetel alarm
pagi lalu menekan snooze berkali-kali. Hemat kata: tidak ada kata yang
menjelaskan leluconnya, setup dan punchline menyatu dalam satu kalimat.
Frasa "seizing it in installments" juga lebih segar daripada kandidat 2
dan 3 yang strukturnya sudah sering dipakai. Kandidat 4 dan 5 dekat,
tapi punchline mereka mendarat di tengah kalimat, bukan di akhir.

## Uji

```sh
ENTRY_OUTPUT=/tmp/entry-test/entry.txt node main.ts
```

Keluar 0, `entry.txt` berisi tepat satu baris 112 karakter (lihat laporan
build untuk bukti lengkap).
