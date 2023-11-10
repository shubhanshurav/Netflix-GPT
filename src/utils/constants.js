export const LOGO = "./assets/Netflix_Logo.png" 
// export const USER_AVTAR = "https://avatars.githubusercontent.com/u/87806305?v=4" 
export const IMAGE_URL = 
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
 
  export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  }; 

  export const IMD_CDN_URL = "https://image.tmdb.org/t/p/w300";

  export const BG_URL = "./assets/background.jpg";

  export const SUPPORTED_LANGUAGES = [
       {identifier: "en", name: "English"},
       {identifier: "hindi", name: "Hindi"},
       {identifier: "spanish", name: "Spanish"},
  ];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;