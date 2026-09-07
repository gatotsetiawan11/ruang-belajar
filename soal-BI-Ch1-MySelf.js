/*
============================================================================
 FILE  : soal-BI-Ch1-MySelf.js
 MAPEL : Bahasa Inggris
 KELAS : III SD/MI
 BAB   : Chapter 1 – My Self (Diriku)
 SUMBER: Buku "Bahasa Inggris: English for Nusantara Kids untuk SD/MI
         Kelas III" (Iyen Nurlaelawati, dkk.; Kemendikbudristek, 2024)

============================================================================
 PENJELASAN SINGKAT MATERI CHAPTER 1
------------------------------------------------------------------------
Bab 1 "My Self" mengajarkan cara memperkenalkan diri dan menceritakan
kegiatan kesukaan sepulang sekolah dalam bahasa Inggris.

Subbab A – My Name (hal. 3–17)
1. Sapaan (greeting): Good morning, Good afternoon, Good evening,
   Good night.
2. Memperkenalkan diri: I am .../ I'm ... / My name is ...
3. Bertanya nama: What is your name? / What's your name?
4. Bertanya umur: How old are you? > I am ... years old.
5. Angka (numbers) 1–10: one, two, three, ..., ten.
6. Ungkapan bertemu: Nice to meet you. (Nice to meet you, too.)
   Serta: How about you? / Are you twins?
7. Contoh nyata buku: Pipit (9), Putra & Putri (5, kembar), Bara.

Subbab B – My Favorite Activity (hal. 18–32)
1. Kegiatan favorit (dari Gambar/Bingo & Story):
   drawing, playing with toys, watching cartoons, riding a bicycle,
   playing the piano, playing computer games, playing football,
   reading, singing, swimming, dancing, playing badminton.
2. Ungkapan kesukaan: I like ... / I love ...
3. Bertanya: What is your favorite activity after school?
4. Keterangan waktu/tempat: after school, in my school time,
   in the field, near my house; dan rutinitas: I draw after school.
   (Catatan Worksheet 1.3: When do you do ...? / Where do you do ...?)
5. Cerita Pipit: I love drawing. I draw my doll/mother/house.
   Ungkapan: Where is my pencil? / Can you pass me the pencil?
   / Thank you. / It's time to draw. / What about you?

Kata kunci: greeting, name, age, numbers 1-10, favorite activity,
like/love, after school.

============================================================================
 ATURAN FORMAT
------------------------------------------------------------------------
Setiap soal berbentuk objek: { soal, pilihan, kunci }
 - pilihan : array berisi 4 opsi (A, B, C, D)
 - kunci   : indeks jawaban benar (0 = A, 1 = B, 2 = C, 3 = D)

Level soal (taksonomi kognitif):
 - C1 = Mengingat (fakta, istilah, kosakata langsung)
 - C2 = Memahami (makna ungkapan, memilih jawaban benar)
 - C3 = Mengaplikasi (menerapkan ungkapan pada situasi baru)
 - C4 = Menganalisis (menggunakan konteks dialog untuk memilih respon)
 - C5 = Mengevaluasi (menilai pilihan kata/ungkapan paling tepat)

Catatan kualitas: jumlah soal per level disesuaikan dengan banyaknya
materi; kualitas dijaga agar sesuai buku dan tidak ambigu. Untuk SD
kelas III, dominasi C1–C3 wajar, dan C4–C5 dibuat berbasis
reading/dialog pendek.
============================================================================
*/

const bankSoalBICh1MySelf = {

  // =========================================================================
  // C1 – MENGINGAT (kosakata, istilah, fakta, pola langsung)
  // =========================================================================
  C1: [

    // ---------- Greeting (sapaan) ----------
    {
      soal: "Good morning, Bara.",
      pilihan: ["Good morning, Pipit.", "Good night, Pipit.", "Good afternoon, Pipit.", "Good evening, Pipit."],
      kunci: 0
    },
    {
      soal: "Good afternoon, Putra.",
      pilihan: ["Good evening.", "Good night.", "Good afternoon, Bara.", "Good morning."],
      kunci: 2
    },
    {
      soal: "Good evening, Ibu Ling Ling.",
      pilihan: ["Good morning.", "Good evening, Pipit.", "Good afternoon.", "Good night."],
      kunci: 1
    },
    {
      soal: "Good night, Putri.",
      pilihan: ["Good afternoon.", "Good morning.", "Good way.", "Good night, Emak."],
      kunci: 3
    },
    {
      soal: "You meet your friend in the morning. You say, “... .”",
      pilihan: ["Good morning", "Good night", "Good afternoon", "Good evening"],
      kunci: 0
    },
    {
      soal: "We say “Good night” when we ... to sleep.",
      pilihan: ["go to bed", "wake up", "eat lunch", "play football"],
      kunci: 0
    },
    {
      soal: "“Good afternoon” is said in the ... ",
      pilihan: ["afternoon", "morning", "midnight", "night"],
      kunci: 0
    },
    {
      soal: "“Good morning” artinya ...",
      pilihan: ["Selamat pagi", "Selamat siang", "Selamat malam", "Selamat tidur"],
      kunci: 0
    },

    // ---------- Introducing name (nama) ----------
    {
      soal: "“My name is ...” means ...",
      pilihan: ["Nama saya ...", "Apa kabarmu?", "Sampai jumpa.", "Siapa kamu?"],
      kunci: 0
    },
    {
      soal: "“I am Pipit.” means ...",
      pilihan: ["Aku Pipit.", "Apa kabar Pipit?", "Pipit di mana?", "Putri Pipit."],
      kunci: 0
    },
    {
      soal: "To introduce your name, you can say, “... .”",
      pilihan: ["I am happy.", "My name is Bara.", "I am tired.", "Good job."],
      kunci: 1
    },
    {
      soal: "“What is your name?” means ...",
      pilihan: ["Siapa namamu?", "Berapa umurmu?", "Apa kabarmu?", "Siapa mereka?"],
      kunci: 0
    },
    {
      soal: "We ask a person's name by saying, “... ?”",
      pilihan: ["What is your name?", "How old are you?", "Where are you?", "Who is she?"],
      kunci: 0
    },
    {
      soal: "“Nice to meet you.” means ...",
      pilihan: ["Senang bertemu denganmu", "Sampai jumpa lagi", "Selamat pagi", "Terima kasih"],
      kunci: 0
    },
    {
      soal: "After someone says “Nice to meet you.”, you reply, “...”",
      pilihan: ["Nice to meet you, too.", "Good night.", "Good bye.", "Thank you."],
      kunci: 0
    },

    // ---------- Age & numbers 1-10 ----------
    {
      soal: "The number 'one' is ... in Indonesian.",
      pilihan: ["satu", "dua", "tiga", "lima"],
      kunci: 0
    },
    {
      soal: "The number after 'three' is ...",
      pilihan: ["four", "two", "five", "six"],
      kunci: 0
    },
    {
      soal: "'Lima' in English is ...",
      pilihan: ["five", "four", "seven", "nine"],
      kunci: 0
    },
    {
      soal: "The number 'seven' is ...",
      pilihan: ["tujuh", "enam", "delapan", "sembilan"],
      kunci: 0
    },
    {
      soal: "“I am ... years old.” Pipit is 9. So Pipit says, “I am ... years old.”",
      pilihan: ["nine", "seven", "five", "ten"],
      kunci: 0
    },
    {
      soal: "“How old are you?” means ...",
      pilihan: ["Berapa umurmu?", "Siapa namamu?", "Apa kabarmu?", "Siapa kamu?"],
      kunci: 0
    },
    {
      soal: "We ask someone's age by saying, “... ?”",
      pilihan: ["How old are you?", "What is your name?", "Where are you from?", "Who is he?"],
      kunci: 0
    },
    {
      soal: "Putra and Putri are 5 years old. We say, “I am ... years old.”",
      pilihan: ["five", "nine", "seven", "three"],
      kunci: 0
    },
    {
      soal: "The numbers from 1 to 3 in English are ...",
      pilihan: ["one, two, three", "one, three, five", "two, four, six", "three, six, nine"],
      kunci: 0
    },
    {
      soal: "'Sepuluh' in English is ...",
      pilihan: ["ten", "nine", "eleven", "twelve"],
      kunci: 0
    },

    // ---------- Favorite activity (kata kunci & kegiatan) ----------
    {
      soal: "'Sepulang sekolah' in English is ...",
      pilihan: ["after school", "in the morning", "at night", "in the garden"],
      kunci: 0
    },
    {
      soal: "'Kegiatan yang kamu sukai' is ...",
      pilihan: ["favorite activity", "new name", "nice weather", "big house"],
      kunci: 0
    },
    {
      soal: "'Menggambar' in English is ...",
      pilihan: ["drawing", "singing", "reading", "dancing"],
      kunci: 0
    },
    {
      soal: "'Menonton kartun' in English is ...",
      pilihan: ["watching cartoons", "playing football", "riding a bicycle", "cooking"],
      kunci: 0
    },
    {
      soal: "'Bersepeda' in English is ...",
      pilihan: ["riding a bicycle", "swimming", "singing", "writing"],
      kunci: 0
    },
    {
      soal: "'Bermain dengan mainan' in English is ...",
      pilihan: ["playing with toys", "watching cartoons", "making the bed", "reading books"],
      kunci: 0
    },
    {
      soal: "We say “I ... drawing.” to tell that I like drawing.",
      pilihan: ["like", "want", "go", "come"],
      kunci: 0
    },
    {
      soal: "The word 'singing' means ... in Indonesian.",
      pilihan: ["menyanyi", "menggambar", "berlari", "membaca"],
      kunci: 0
    },
    {
      soal: "The word 'swimming' means ... in Indonesian.",
      pilihan: ["berenang", "bersepeda", "melukis", "menari"],
      kunci: 0
    },

    // ---------- Extra everyday phrases from story ----------
    {
      soal: "“Thank you.” means ...",
      pilihan: ["Terima kasih", "Selamat pagi", "Sampai jumpa", "Maaf"],
      kunci: 0
    },
    {
      soal: "“You are welcome” is the reply for ...",
      pilihan: ["Thank you", "Good morning", "How are you", "Nice to meet you"],
      kunci: 0
    }
  ],

  // =========================================================================
  // C2 – MEMAHAMI (memahami maksud ungkapan & memilih yang benar)
  // =========================================================================
  C2: [
    // ---------- Greeting usage understanding ----------
    {
      soal: "It is six in the evening. Your neighbor says, “Good evening.” What should you reply?",
      pilihan: ["Good evening.", "Good morning.", "Good night.", "Good afternoon."],
      kunci: 0
    },
    {
      soal: "You open your eyes at six in the morning and see your mother. You greet her, “...”",
      pilihan: ["Good morning, Mom.", "Good night, Mom.", "Goodbye, Mom.", "Good evening, Mom."],
      kunci: 0
    },
    {
      soal: "Your little sister is going to sleep. You say, “...”",
      pilihan: ["Good night, sister.", "Good morning, sister.", "Good afternoon.", "Good luck."],
      kunci: 0
    },
    {
      soal: "Bara meets his teacher at noon. He should say, “...”",
      pilihan: ["Good afternoon, sir.", "Good night, sir.", "Good morning, sir.", "Hello bye."],
      kunci: 0
    },

    // ---------- Understanding name introduction ----------
    {
      soal: "A boy says to Pipit, “Hi, I am Bara. What is your name?”. Pipit should answer, “...”",
      pilihan: ["My name is Pipit.", "I am ten years old.", "I am from Malang.", "I like drawing."],
      kunci: 0
    },
    {
      soal: "Someone asks, “What is your name?”. The suitable answer is ...",
      pilihan: ["My name is Putra.", "I am nine years old.", "I am in the garden.", "I like reading."],
      kunci: 0
    },
    {
      soal: "Putri says, “My name is Putri.” It means she tells ...",
      pilihan: ["her name", "her age", "her school", "her hobby"],
      kunci: 0
    },
    {
      soal: "'Nice to meet you' is said when we ... someone for the first time.",
      pilihan: ["meet", "leave", "eat", "sleep"],
      kunci: 0
    },
    {
      soal: "People say “Nice to meet you.” to show that they are ... to meet you.",
      pilihan: ["happy", "sad", "angry", "tired"],
      kunci: 0
    },

    // ---------- Understanding age ----------
    {
      soal: "Sinta asks, “How old are you?”. Putra answers, “...”",
      pilihan: ["I am five years old.", "My name is Putra.", "I like toys.", "I am from Malang."],
      kunci: 0
    },
    {
      soal: "Pipit is nine years old. Putri is five years old. Who is older?",
      pilihan: ["Pipit", "Putri", "Bara", "They are the same"],
      kunci: 0
    },
    {
      soal: "Bara is 9. In English we say, “I am ... years old.”",
      pilihan: ["nine", "nineteen", "ninety", "five"],
      kunci: 0
    },
    {
      soal: "The question about age is ...",
      pilihan: ["How old are you?", "What is your name?", "Who are they?", "Where is the pencil?"],
      kunci: 0
    },

    // ---------- Understanding like/love & activity ----------
    {
      soal: "“I love riding a bicycle.” The word 'love' here means ...",
      pilihan: ["sangat suka / sayang sekali akan", "benci", "lupa", "segera"],
      kunci: 0
    },
    {
      soal: "Pipit says, “I love drawing.” It means she ... drawing.",
      pilihan: ["really likes", "hates", "never does", "forgets"],
      kunci: 0
    },
    {
      soal: "Putra says, “What is your favorite activity after school?”. He wants to know about ...",
      pilihan: ["the activity you like after school", "your name", "your age", "your school"],
      kunci: 0
    },
    {
      soal: "'After school' means ...",
      pilihan: ["setelah jam sekolah / pulang sekolah", "sebelum sekolah", "saat makan siang", "di dalam kelas"],
      kunci: 0
    },
    {
      soal: "‘I draw after school.’ tells that I draw ...",
      pilihan: ["after school time", "in the morning before class", "at midnight", "on Sunday only"],
      kunci: 0
    },

    // ---------- Understanding key words meanings ----------
    {
      soal: "'What is your favorite activity?' The children answer, “I love ...”. The word that shows their favorite is ...",
      pilihan: ["activity / hobby", "name", "classroom", "school"],
      kunci: 0
    },
    {
      soal: "Which number is 'nine'? The students count one to ten: one, two, three, ... eight, nine, ten. So 'nine' is number ...",
      pilihan: ["sembilan", "enam", "tujuh", "delapan"],
      kunci: 0
    },
    {
      soal: "'Reading' books is a kind of ...",
      pilihan: ["activity / hobby", "food", "greeting", "number"],
      kunci: 0
    },
    {
      soal: "‘Good morning’ is a way to ... someone.",
      pilihan: ["greet", "count", "draw", "sleep"],
      kunci: 0
    }
  ],

  // =========================================================================
  // C3 – MENGAPLIKASI (menerapkan pola pada situasi baru)
  // =========================================================================
  C3: [
    // ---------- Applying greeting ----------
    {
      soal: "It is 8 o'clock in the morning. You meet your teacher at the gate. You say, “...”",
      pilihan: ["Good morning, sir.", "Good night, sir.", "Good afternoon, sir.", "Goodbye, sir."],
      kunci: 0
    },
    {
      soal: "Your family eats dinner at 7 in the evening. To greet your father at that time, you say, “...”",
      pilihan: ["Good evening, Dad.", "Good morning, Dad.", "Good afternoon, Dad.", "Good night after sleep."],
      kunci: 0
    },
    {
      soal: "It is 6 p.m. Your aunt comes to your house. The best greeting is ...",
      pilihan: ["Good evening", "Good morning", "Good afternoon", "Good night in sleep"],
      kunci: 0
    },
    {
      soal: "Your little brother is going to bed at 9 p.m. You say to him, “...”",
      pilihan: ["Good night, little brother.", "Good morning, buddy.", "Good afternoon.", "Sleep in afternoon."],
      kunci: 0
    },

    // ---------- Applying self-introduction ----------
    {
      soal: "Your new classmate asks your name. You answer, “...”",
      pilihan: ["My name is Sinta.", "I am nine years old.", "I am in Malang.", "I like football."],
      kunci: 0
    },
    {
      soal: "Your friend says, “Hi, I am Agung. What is your name?”. You reply nicely, “...”",
      pilihan: ["Hello, I am Bara.", "I am very well, thank you.", "Nice to sleep.", "See you tomorrow."],
      kunci: 0
    },
    {
      soal: "A new student says, “Nice to meet you!”. You should reply, “...”",
      pilihan: ["Nice to meet you, too.", "Yes, I am meeting.", "No, thank you.", "Good, goodbye."],
      kunci: 0
    },
    {
      soal: "Your teacher asks how old you are. You are eight. You say, “...”",
      pilihan: ["I am eight years old.", "I am fine.", "My name is eight.", "I am from eight."],
      kunci: 0
    },
    {
      soal: "Putra wants to know your age politely. He asks, “...”",
      pilihan: ["How old are you?", "What is your name?", "Where do you live?", "Who is your friend?"],
      kunci: 0
    },

    // ---------- Applying number usage ----------
    {
      soal: "You are 7 years old. To tell your age you say, “I am ... years old.”",
      pilihan: ["seven", "seventeen", "seventy", "six"],
      kunci: 0
    },
    {
      soal: "You have 6 books. You say, “I have ... books.”",
      pilihan: ["six", "five", "seven", "twenty"],
      kunci: 0
    },
    {
      soal: "Bara is 9 and it is his birthday. To count candles, you count, “...” up to nine.",
      pilihan: ["one, two, three, four, five, six, seven, eight, nine", "one, two, five, ten, nine", "two, four, six, ten", "ten, nine, eight, seven"],
      kunci: 0
    },

    // ---------- Applying favorite activity ----------
    {
      soal: "Your friend asks, “What is your favorite activity after school?”. You like drawing, so you answer, “...”",
      pilihan: ["I like drawing.", "My name is Bara.", "I am nine.", "I am fine, thank you."],
      kunci: 0
    },
    {
      soal: "You want to tell everyone that you really love singing. You say, “...”",
      pilihan: ["I love singing.", "I am singing badly.", "Singing is morning.", "I never sing."],
      kunci: 0
    },
    {
      soal: "Pipit loves watching cartoons. She can say, “I ... watching cartoons.”",
      pilihan: ["love", "hate", "wash", "count"],
      kunci: 0
    },
    {
      soal: "A boy loves playing with toys. He can tell you, “I like ... with my toys.”",
      pilihan: ["playing", "watching", "cooking", "sleeping"],
      kunci: 0
    },

    // ---------- Applying everyday-phrase (story context) ----------
    {
      soal: "Your friend gives you his ruler. You should say, “...”",
      pilihan: ["Thank you.", "Good morning.", "Nice to meet you?", "How old?"],
      kunci: 0
    },
    {
      soal: "Your pencil is under the desk. To ask where it is, you say, “...”",
      pilihan: ["Where is my pencil?", "What is my pencil?", "How is my pencil?", "Who is my pencil?"],
      kunci: 0
    },
    {
      soal: "You need a pencil from your friend. You ask politely, “...”",
      pilihan: ["Can you pass me the pencil, please?", "Give me now!", "Where are you going?", "I like pencils fast."],
      kunci: 0
    },

    // ---------- Applying 'How about you?' ----------
    {
      soal: "Putra says, “I am five. How about you?”. He is asking your ...",
      pilihan: ["age", "name", "school", "color"],
      kunci: 0
    },
    {
      soal: "You say “Nice to meet you.” and your friend replies, “Nice to meet you, too.” Then you might add, “I am Sinta. How about you?” to ask ...",
      pilihan: ["the friend's name", "the time", "the weather", "the price"],
      kunci: 0
    }
  ],

  // =========================================================================
  // C4 – MENGANALISIS (menggunakan konteks dialog/cerita untuk memilih respon)
  // =========================================================================
  C4: [
    // ---------- Dialog comprehension: meeting ----------
    {
      soal: "Budi: “Hello, my name is Budi. What is your name?”\nSari: “...”\nWhat should Sari say to introduce her name?",
      pilihan: ["My name is Sari.", "I am very well.", "Goodbye, Budi.", "I am ten years old."],
      kunci: 0
    },
    {
      soal: "Dito: “How old are you?”\nLina: “...” Lina is six years old.\nWhat should Lina answer?",
      pilihan: ["I am six years old.", "I am a student.", "I am from Bogor.", "I like swimming."],
      kunci: 0
    },
    {
      soal: "Look at the dialogue:\nA: “Good morning, my name is ...?” B: “Good morning, I am Sinta.” \nThe missing opening greeting is ...",
      pilihan: ["Good morning", "Good night", "Goodbye", "Good night-sleep"],
      kunci: 0
    },
    {
      soal: "Read the story: Pipit meets Bara for the first time in the afternoon. Pipit says, “...”. What time of day is it?",
      pilihan: ["It is in the afternoon.", "It is in the morning.", "It is midnight.", "It is night sleep time."],
      kunci: 0
    },

    // ---------- Dialog comprehension: age & response ----------
    {
      soal: "Putri: “I am five. How about you?”\nPutra: “I am five, too.” From the dialogue we know Putra and Putri ...",
      pilihan: ["are the same age", "are brothers but different ages", "are new friends", "like different colors"],
      kunci: 0
    },
    {
      soal: "In the story, Bara is 9 and Pipit’s little brother Putra is 5. So between Bara and Putra, who is older?",
      pilihan: ["Bara is older", "Putra is older", "They are twins", "They are the same age"],
      kunci: 0
    },
    {
      soal: "Lintang: “I am six. How old are you?” Agung: “...”\nAgung’s card says he is six too. What is the best answer?",
      pilihan: ["I am six years old, too.", "I am nine.", "I am very fine.", "Good afternoon."],
      kunci: 0
    },

    // ---------- Dialog comprehension: activity ----------
    {
      soal: "Rina: “What is your favorite activity after school?”\nBima: “...” Bima loves playing football. So Bima answers, “...”",
      pilihan: ["I love playing football.", "I am football, yes.", "I like school after.", "Yes, playing sleep."],
      kunci: 0
    },
    {
      soal: "From the story, Pipit says, “I love drawing.” She draws her doll, her mother, and her house. So Pipit's favorite activity is ...",
      pilihan: ["drawing", "singing", "swimming", "watching cartoons"],
      kunci: 0
    },
    {
      soal: "Nadia loves watching cartoons and Edo loves playing with toys. Nadia says, “...”",
      pilihan: ["I love watching cartoons.", "I love playing with toys.", "I love drawing.", "I love singing."],
      kunci: 0
    },
    {
      soal: "Putri is drawing. She says “I love drawing. It's time to draw my house.” She wants to draw ...",
      pilihan: ["her house", "the sun", "a bicycle", "a ball"],
      kunci: 0
    },
    {
      soal: "In a group, Agung’s card says his age is six. Another student Firly says, “How old are you?”. The best answer for Agung is, “...”",
      pilihan: ["I am six years old.", "I am from school.", "I like toys.", "Nice to meet you, six."],
      kunci: 0
    },

    // ---------- Dialog comprehension: combining greeting+name+age ----------
    {
      soal: "Read this short dialogue:\nStudent: Good morning. I am Chintya. What is your name?\nFriend: Good morning. My name is Jajang. Nice to meet you.\nChintya: Nice to meet you, too. How old are you, Jajang?\nJajang: I am nine.\nWhat is Chintya asking Jajang?",
      pilihan: ["His name and his age", "His address", "His favorite food", "His classroom"],
      kunci: 0
    },
    {
      soal: "In the same dialogue, how old is Jajang?",
      pilihan: ["Nine", "Five", "Six", "Ten"],
      kunci: 0
    },
    {
      soal: "Read: Hello. I am Edo. I am five years old. I love riding a bicycle. \nWho is five years old?",
      pilihan: ["Edo", "Sinta", "Pipit", "Bara"],
      kunci: 0
    },
    {
      soal: "From the sentence option above (“I love riding a bicycle.”), Edo’s favorite activity is ...",
      pilihan: ["riding a bicycle", "reading a book", "watching cartoons", "playing a piano"],
      kunci: 0
    },
    {
      soal: "Look at the comic strip: Bara is visiting Pipit’s house. Pipit introduces Putra and Putri to Bara. Both say “Nice to meet you.” Why do they say it?",
      pilihan: ["Because they meet each other for the first time", "Because it is morning", "Because they are hungry", "Because school starts"],
      kunci: 0
    },
    {
      soal: "In the story, Putra and Putri are 5-year-old twins. When Bara asks “Are you twins?”, Putri answers, “Yes, we are.” The word 'twins' means ...",
      pilihan: ["kembar", "sahabat", "guru", "tetangga"],
      kunci: 0
    },
    {
      soal: "Putra asks Bara, “How old are you, Putri?” Putri replies, “I'm five, too.” This tells us that Putra and Putri ...",
      pilihan: ["have the same age", "like different things", "are in different schools", "do not know each other"],
      kunci: 0
    }
  ],

  // =========================================================================
  // C5 – MENGEVALUASI (menilai ungkapan paling tepat & kesopanan)
  // =========================================================================
  C5: [
    // ---------- Evaluating politeness in greeting ----------
    {
      soal: "It is 10 o'clock in the morning. Your uncle visits. Among these greetings, which is the most correct?",
      pilihan: ["Good morning, Uncle.", "Good night, Uncle.", "Good afternoon, Uncle.", "Good evening in sleep."],
      kunci: 0
    },
    {
      soal: "You meet your friend at 2 p.m. Which greeting is best for this time?",
      pilihan: ["Good afternoon", "Good morning", "Good night", "Getting up"],
      kunci: 0
    },
    {
      soal: "Your grandmother is going to bed. To be polite, you say, “...”",
      pilihan: ["Good night, Grandma.", "Good morning, Grandma.", "Good afternoon, Grandma.", "Goodbye loudly."],
      kunci: 0
    },
    {
      soal: "It is 7 in the evening and your teacher says “Good evening.” You should reply politely, “...”",
      pilihan: ["Good evening, madam/sir.", "Good morning, madam.", "Night sleep.", "See you, afternoon."],
      kunci: 0
    },

    // ---------- Evaluating the most polite way to introduce ----------
    {
      soal: "You meet a person for the first time in the morning. Which is the best, most polite and complete introduction?",
      pilihan: ["Good morning. My name is Bara. I am happy to meet you.", "Good night. I am Bara, ten.", "Hey, I am Bara, give me your book.", "What is your name?"],
      kunci: 0
    },
    {
      soal: "Someone says “Nice to meet you.” You should never answer, “...”",
      pilihan: ["Goodbye, I am going to sleep now.", "Nice to meet you, too.", "The pleasure is mine / same here.", "Glad to meet you."],
      kunci: 0
    },
    {
      soal: "A friend asks, “Nice to meet you, too. How about you?” Actually he forgot to ask your name. The best, kind reply to also give your name is ...",
      pilihan: ["Nice to meet you, too. I am Sinta.", "I don't want to say.", "Just say nothing.", "It is a secret forever."],
      kunci: 0
    },
    {
      soal: "To be introduced to an adult, the most polite opening is ...",
      pilihan: ["Good morning. I am Pipit. Nice to meet you.", "What is your name right now?", "I am nine and you?", "Goodbye, sir."],
      kunci: 0
    },

    // ---------- Evaluating the most appropriate activity reply ----------
    {
      soal: "Your teacher asks, “What is your favorite activity after school?” To give a clear and correct answer you say, “...”",
      pilihan: ["I love reading books after school.", "Yes, I love.", "Favorite yes, thank you.", "I am reading-like."],
      kunci: 0
    },
    {
      soal: "When you tell friends what you really like most, which expression shows the strongest feeling?",
      pilihan: ["I love swimming.", "I like swimming.", "I try swimming sometimes.", "Swimming is okay, maybe."],
      kunci: 0
    },
    {
      soal: "After answering about your hobby, it is kind to ask back politely. The best follow-up is ...",
      pilihan: ["How about you?", "Goodbye now.", "Stop talking.", "Give me your toy."],
      kunci: 0
    },

    // ---------- Evaluating best response in dialogue flow ----------
    {
      soal: "Read: A boy says “Hello. I am Putra. This is my sister, Putri. We are twins.” You are meeting them the first time in the morning. What is the most polite response?",
      pilihan: ["Good morning. Nice to meet you, Putra and Putri.", "Good night, twins.", "Give me your names.", "Wow, you are small."],
      kunci: 0
    },
    {
      soal: "In the “Meet and Greet” game, Lintang says to Agung: “Hello. I am Lintang.” Agung should respond most correctly to also introduce himself ...",
      pilihan: ["Hi, I am Agung.", "Yes, you are in line.", "I see you.", "Good, good, bye."],
      kunci: 0
    },
    {
      soal: "Sinta: “How old are you?” Gani is nine. To answer politely and completely, Gani says, “...”",
      pilihan: ["I am nine years old.", "Nine years, maybe.", "I have nine.", "Nine you too?"],
      kunci: 0
    },
    {
      soal: "When you cannot find your pencil during craft, you say to your friend politely, “...”",
      pilihan: ["Can you pass me the pencil, please? Thank you.", "Where your pencil silly?", "Give me, quick!", "I will not say please."],
      kunci: 0
    },
    {
      soal: "Your friend does a good drawing. The kind thing to say is, “...”",
      pilihan: ["Wow, your drawing is great!", "My drawing is better always.", "You can't draw.", "Do not show me."],
      kunci: 0
    },
    {
      soal: "A very polite child should greet his/her teacher with good manners. Choose the most polite greeting for meeting the teacher on the way to school in the morning ...",
      pilihan: ["Good morning, Ma'am. I am happy to see you.", "Ma'am, I walk, you walk.", "Hello, I am in a hurry.", "Goodbye, Ma'am."],
      kunci: 0
    }
  ]
};

// Catatan: untuk memudahkan pemuatan di aplikasi belajar, pastikan file ini
// dipanggil sebelum kode kuis yang membaca const bankSoalBICh1MySelf.