class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
    watch() {
      console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
  }
  
  let video1 = new Video("Funny", "user1", 300);
  video1.watch();
  let video2 = new Video("Sad", "user2", 200);
  
  let arr = [
    {
      title: "Nostalgic",
      uploader: "user3",
      time: 400,
    },
    {
      title: "Angry",
      uploader: "user4",
      time: 180,
    },
    {
      title: "Calm",
      uploader: "user5",
      time: 900,
    },
    {
      title: "Music",
      uploader: "user6",
      time: 860,
    },
    {
      title: "Child",
      uploader: "user7",
      time: 80,
    },
  ];
  
  for(let vid of arr) {
    new Video(vid.title, vid.uploader, vid.time).watch()
  
  }