export const base64Mime = (encoded) => {
  let result = null;

  if (typeof encoded !== "string") {
    return result;
  }

  let mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

  if (mime && mime.length) {
    result = mime[1];
  }

  return result;
};

export const dataURLtoFile = (dataurl, filename) => {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const extractSongTitle = (url) => {
  try {
    let song = url
      .slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."))
      .replace("+", " ");
    return song.replace(/\W\d*/g, " ");
  } catch (err) {
    console.log(err);
  }
};

export const formatNewSongs = (songFiles, initLength) => {
  $(".songTitle")
    .slice(initLength)
    .each((idx, song) => {
      $(".update-song")[idx + initLength].classList.add("new-song");
    });

  $(".new-song .songTitle").each((idx, song) => {
    $(song).text(songFiles[idx].name.replace(".mp3", ""));
  });

  $(".dj-update-songs").scrollTop($(".dj-update-songs")[0].scrollHeight);
};


// export const getPhoto = (dj) => {
//   const path = `https://denizen-confidant-seeds.s3.amazonaws.com/`;
//   let formatName;
//   try {
//     formatName = dj.name.toLowerCase().replace(/\s/g, "");
//   } catch (e) {
//     console.log(e);
//   } finally {
//     return `${path}${formatName}.png`;
//   }
// }

export const getPhoto = (dj) => {
  if (!dj) return null;
  const path = `https://denizen-confidant-seeds.s3.amazonaws.com/`;
  let formatName = dj.name?.toLowerCase().replace(/\s/g, "");
  return `${path}${formatName}.png`;
};