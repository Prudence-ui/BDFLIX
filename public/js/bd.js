const params = new URLSearchParams(window.location.search);
const bdId = params.get("id");

/* 📱 Detecte si on est dans l'application Android */
function isAndroidApp() {
  return typeof Android !== "undefined";
}


/* ===============================
   ⭐ REWARDED SYSTEM (ADSTERRA)
================================ */

function showRewardedAd(callback) {

  // APP ANDROID → garde ton système
  if (isAndroidApp()) {
    Android.showRewardedAd();
    window.rewardCallback = callback;
    return;
  }

  // WEB → Adsterra Social Bar
  afficherPubAdsterra(callback);
}

/* ===============================
   🌐 ADSTERRA SOCIAL BAR
================================ */
function afficherPubAdsterra(callback){

  // écran noir fullscreen (illusion rewarded)
  const adWrapper = document.createElement("div");

  adWrapper.style = `
    position:fixed;
    inset:0;
    background:black;
    z-index:99999;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:white;
    text-align:center;
  `;

  adWrapper.innerHTML = `
    <h2>📺 Publicité en cours...</h2>
    <p>Veuillez patienter quelques secondes</p>
  `;

  document.body.appendChild(adWrapper);

  /* 🔥 Charger Adsterra UNIQUEMENT après clic utilisateur */
  const script = document.createElement("script");
  script.src="https://pl28746286.effectivegatecpm.com/08/f0/27/08f027a8afe2523fcba1bd35eaabf7aa.js";
  script.async=true;

  document.body.appendChild(script);

  /* ⏱ Temps minimum (rewarded simulation) */
  setTimeout(()=>{

      adWrapper.remove();

      if(callback) callback();

  },8000); // 8 sec = bon équilibre CPM / UX
}



/* 📚 BASE GOOGLE DRIVE */
  const DRIVE_PREVIEW = "https://drive.google.com/file/d/";

/* ⚡ Cloudinary CDN */
const CDN = "https://res.cloudinary.com/dulhq0vvv/image/upload/f_auto,q_auto,w_400/";

/* 📚 liste des BD */
const bds = {
  1:{ titre:"MORPHEUCUK", image:CDN+"v1770055741/bd1_vhkz0m.jpg", chapitres:11 },
  2:{ titre:"TOMB RAIDER", image:CDN+"v1770055739/bd2_nexzqc.jpg", chapitres:8 },
  3:{ titre:"MIRANDA", image:CDN+"v1770055735/bd3_jqxcil.jpg", chapitres:13 },
  4:{ titre:"THE SHEPHERD'S WIFE", image:CDN+"v1770055736/bd4_xr7ltr.jpg", chapitres:21 },
  5:{ titre:"ISOLEE", image:CDN+"v1770055741/bd5_mm6gwh.jpg", chapitres:12 },
  51:{ titre:"BIG BLACK COCKS", image:CDN+"v1771086646/bd51_th4gfj.jpg", chapitres:7 },

  6:{ titre:"SISTER GRACE", image:CDN+"v1770055749/bd6_kowuwf.jpg", chapitres:4 },
  7:{ titre:"LOUISE", image:CDN+"v1770055738/bd7_heqzfx.jpg", chapitres:22 },
  8:{ titre:"FAMILY SINS", image:CDN+"v1770055747/bd8_caxdoe.jpg", chapitres:5 },
  9:{ titre:"DADDY", image:CDN+"v1770055746/bd9_gnuyhd.jpg", chapitres:4 },
  10:{ titre:"MOM'S HELP", image:CDN+"v1770055748/bd10_vtij6z.jpg", chapitres:3 },
  101:{ titre:"VELAMMA", image:CDN+"v1771238444/bd101_akkgl8.jpg", chapitres:21 },


  11:{ titre:"DESIR FORBIDDEN", image:CDN+"v1770055743/bd11_q4ne9o.jpg", chapitres:6 },
  12:{ titre:"LISTE DE VIE", image:CDN+"v1770055743/bd12_irq7fw.jpg", chapitres:7 },
  13:{ titre:"FATHER", image:CDN+"v1770055743/bd13_cdimxi.jpg", chapitres:2 },
  14:{ titre:"HELENA", image:CDN+"v1770055743/bd14_foz8sf.jpg", chapitres:4 },
  15:{ titre:"DETENTION", image:CDN+"v1770055743/bd15_ubrp04.jpg", chapitres:2 },
  16:{ titre:"LES BLACKS", image:CDN+"v1770055738/bd16_axm9uh.jpg", chapitres:5 },
  17:{ titre:"DESIRE", image:CDN+"v1770055735/bd17_jymdgk.jpg", chapitres:4 },
  18:{ titre:"EN COLLE", image:CDN+"v1770055746/bd18_x5ebll.jpg", chapitres:13 },
  19:{ titre:"INCESTE", image:CDN+"v1770055738/bd19_ketlbr.jpg", chapitres:14 },
  20:{ titre:"LA BORDEL DU QUARTIER", image:CDN+"v1770055738/bd20_i0bhwd.jpg", chapitres:20 }
};



/* 🔗 GOOGLE DRIVE FILES */
const driveFiles = {

      /* ===== BD 1 ===== */
  "1-1":"1OeaglTla4wpA4iz59dgPUThYw7j8LEhz",
  "1-2":"1v6ljEGT8B7POLf1OyPG-zZSlsND13baY",
  "1-3":"18pHV42Szh0wmvb1anGcVhrHWfWHkeqZy",
  "1-4":"1DPtDGHJyViaA1HvPhnZxjjsW61EkKpaa",
  "1-5":"1eI3RLoC_S27tsENILnaLwO1VdLj20kiO",
  "1-6":"1TMgB96rT0mstY0JDDrZ9W1anm2gP4RTf",
  "1-7":"1sKOtMyKIeATgQXxURBrBfaIKstaI-kAZ",
  "1-8":"1QnovBADtFCC9_pVInLcLf1TTm2Zntcpc",
  "1-9":"1mih0UHQ7cKHDFt2qy6RG5kfIRdVHmW1g",
  "1-10":"1YSp0Bj20ugGQmWyNX7kZP0U44Le1EIyc",
  "1-11":"1D1-xIE1ds73wb_f81aVGEcsClB6SwrrK",



    /* ===== BD 2 ===== */
  "2-1":"1NBuiLxvEHnfOVi5vhHuHSTsZCkT4T7hH",
  "2-2":"1rO8WwSpRr-bnPmB_oj7nfbZ0q8wPd6bm",
  "2-3":"1u-Lo7iDZ_z_ugCvL4MwlcsuAZnj3Snq6",
  "2-4":"10xuKbqt3nOilibFY5OcWakcJUWN6qSJF",
  "2-5":"1ZNzfwMaM0SVdmi9Tvl4HGsJVkRr0whwh",
  "2-6":"1f3T4myGvnnHCcmWTIkulHf5h4CyhCh9Z",
  "2-7":"13M_mz88dfUB3CMIcN-Buj3-vsfkS47zG",
  "2-8":"1WhdW60fiAA87HXHgIZJxgSxK7L5aNxXk",


    /* ===== BD 3 ===== */
  "3-1":"18_BVxta670uDaarj2hp-m2pZa2rAELy5",
  "3-2":"152vcCMM51QnvPmzaAzF5cOb4HxaQdAnF",
  "3-3":"1Lg6FLwn4Qv-VxUYiEdSPoI8cKGTT8Xf3",
  "3-4":"1WVUJqzjcHI063vNUNgABc3vDTs5jd4Kx",
  "3-5":"1s-9q2IyWJ8vw5J_3wFOKBoEGBvm8tV5T",
  "3-6":"18WoSwHEehDzg7w7RgR1KYf7gTti4sIvr",
  "3-7":"1Fsx9o03PVa5QrtIAWhGA67kvWIuVcUt2",
  "3-8":"1Am-1yC1bK-RDGWvc4r1k2iR59o3-t8wR",
  "3-9":"1iYJCtU4ZxZ3msVpxfKkqc6bG4qNxecqn",
  "3-10":"1sBrOdfV4CHzXlIm3SABMUuTOOV6B0EZf",
  "3-11":"1Gp4gU2dILTN8B9mLGy0Awqw1sQkmhz9_",
  "3-12":"1JvW4HBlSGRGs7ciTA_NeLRkvesHt0apb",
  "3-13":"1QSTtxGGeOsjNaoGbtaD4PIBrSDz24KZA",


    /* ===== BD 4 ===== */
  "4-1":"1gMYVs9tWl4p39U0Yj5PwurdWxyq0KEhm",
  "4-2":"1tDm3_1tVGTSZuJLMu8fRjdepaqX2jgbS",
  "4-3":"1aOhV3orxWh3IAlTKzWTQW7R4-OItNGBM",
  "4-4":"1xzcojLluUjHg9Ek9Nuon970oZFaLA1c0",
  "4-5":"1xw0c4HmMKs9eCcSSF4BX5x3XvZYkM63h",
  "4-6":"1zaKDTsMb9mlOBXDrWC3lkghcAh789wX7",
  "4-7":"1U0yRahA2y_n0aL7QkJooaah6FhxpMUx6",
  "4-8":"1EfyZq7szz_6TDTJ9UZ7APx3yfYpTGf6g",
  "4-9":"1T_5jeMwH_2PfwSVlbUAi3IM6nNVWl1tx",
  "4-10":"1It1WcMZu4ZdjoVXi0sLRVWEPXPdnUEM0",
  "4-11":"1B9QShE1YwXzfVGOTw5WRuzdam50prFBB",
  "4-12":"1C6mDPN3pWo7kfSN5p5EXc21oZnKs154V",
  "4-13":"1oSzDqU5LpfsMw45lsrjwOdRaOxj1_vjD",
  "4-14":"1MTigrKzziWQ0jmWdd6oQWdZHZL3FbqvE",
  "4-15":"1MuoFHtStEU6HAMhZljXfcvWX7kpXgKVx",
  "4-16":"1jy8FVnBFUiMyW19MvtNzSiw6ZkRNq8oN",
  "4-17":"1m4TIcDHrcTG9WJ9ikoX-1dVU3yeQ0Y0Q",
  "4-18":"1TxxB4mgS92zfJgY-nAqdORGOfkGHHlh-",
  "4-19":"1cVsSSmmbDZUJfPd2SLuCk7dqCUmSHyO5",
  "4-20":"191QPzYDpZpoUgCCzY0h6nJXmMZHgUmSS",
  "4-21":"1iWBmdtQ_Kzbety14Fd32WjHkZw3HQKW6",


   /* ===== BD 5 ===== */
  "5-1":"1PqfApDZhwd0V8NQHs8-nmpc9Yj_ziNCZ",
  "5-2":"1Dh_InOYPJUR47yYAm8_E9WZigroGYBa3",
  "5-3":"1DMrqwDDtd24ncRx2uTwF1IydF57P7hI3",
  "5-4":"19ltrgl6I7RuzFjB4xe2jNE1OTm3OL7jg",
  "5-5":"1BQm7bL3xt5thpwxD_MfszQgZqr7naRAi",
  "5-6":"1NYRpAkNjGGGOaZ-9ALaowZWX9qg4_rp6",
  "5-7":"1WN7NJdPGcuuLRi1Rgfbu7M0CZ7HhemUc",
  "5-8":"12A066xoSpRCR-FIQ8ZyND9cENsJ5Sq79",
  "5-9":"15IA4dN-9z67EpWtEEtQW1751EltTAe8c",
  "5-10":"1wPvleo7vnoLlMEyc01hjKhJg6rQhlQeo",
  "5-11":"1X6ubs1WbBFeu-lIoCvUtEZ14KJAqzmu8",
  "5-12":"19WV8WnC0fKRM7h8wQaPWpPehUaqhRp3Y",


      /* ===== BD 51 ===== */
  "51-1":"1MyqXl-hAdZgbOOA3Bye9EUjZgaKlf1B_",
  "51-2":"1pGNxbhlGUWUtIE6ZF1LX6CHb8r5CZih_",
  "51-3":"1BemmWeEaW8NpNPqM9-1mS-ogvGJ5_wkl",
  "51-4":"15-k_1R8Cq0wfwFeFohqsyQ-z0mdjRrta",
  "51-5":"1jDxAOSHkOvrx0l9XMsbuioW5CelEvuNB",
  "51-6":"1gGcvozKRLS7Frh3J2uiTfv1GpkKGziIk",
  "51-7":"1M0JwBpYfSak41w5bBU5R0UIBkaCK8XzS",

    /* ===== BD 6 ===== */
  "6-1":"1BwWLyK7MLWkUv669G3D-r7zo2urSphx5",
  "6-2":"1MZ3kvg4BWmbomEngxUOMs_qvE73jKr5g",
  "6-3":"1rR1g-3Axs3BXFcl2DbCPu9OyFxoor79D",
  "6-4":"1LDjVXEafW5sPZVNzvChFObotjp_xxBSY",

    /* ===== BD 7 ===== */
  "7-1":"1CU8wQpd-i9An31ykBxufRFTZ3MFtQtZx",
  "7-2":"1MRrYcxWWtpMWTylrA2SfGc8y68AfkXK0",
  "7-3":"1QRPWIzJuRWxZ0VgxbAgJxRnJRhi8ob-U",
  "7-4":"1Ce6F8qBMBeCU4E9CO497yazLKlnUFqWd",
  "7-5":"1K6lX44sVGKSaY0BoDqJ_aUwX7JofLOsM",
  "7-6":"1n_G5j0gthPZu23QEZAq4N7cuyF3YVjZx",
  "7-7":"1V70ufwEAjp3NbkzGKP0G8sJmA0O0GSlr",
  "7-8":"1ksqoZhF2Ta0L0aOEgf-61ZBMKZYX_PfB",
  "7-9":"1mKdajcQlw2joro4ClWsTjhgJ9Y6LRbOm",
  "7-10":"1EwvpLplzIRCcz_xayWxe-97SwrAzh-5Y",
  "7-11":"18O-QIQRLztH0aDdRUQKuVo5dKAjWN84L",
  "7-12":"19KAarBt7cd_4C1Sjx9d9C4MrGni9JhiN",
  "7-13":"14r2Z561B24KgacHuf5z8Fxp14MNZm-cd",
  "7-14":"1Op9d-xNCfiwl1vkX8uGxLoTv-Z3cVvh7",
  "7-15":"14M5vjfHKatlBkCJVp9e9IhjFjpGsXGQz",
  "7-16":"1lVpy62WL3gOlurlRnQdtMlYLnKFixbA6",
  "7-17":"1pCy7jsDP_r87auX2Q80xI0TaCB1_skIP",
  "7-18":"1QSTz66w1hDgokSQhHeU7xNebT5scwCeV",
  "7-19":"1Ky7SN8r3wZoW0R15FzJf7VMPm5diQffh",
  "7-20":"1ZFuo0M1ue3FrZPvd1AD3M3k74GpJdyT-",
  "7-21":"14C0c89Ix95eSAJ0YMdIPvSX6f-g5baRN",
  "7-22":"1ylkoIL3wpiO0o4MAytQSKY44WdOUWAQ8",

   /* ===== BD 8 ===== */
  "8-1":"1E4BZ9NjQBRhpkMUZtzOa-eNekXeizkRT",
  "8-2":"1-VontMaOWJGhlNPoxW9TsQeM-C_3Hasq",
  "8-3":"1P0bQ2bfFyMVk2dNUuqj_wvkkXcY26UI9",
  "8-4":"16N0StGJzUbZBB56xKxXoFcm_wBXHTGFn",
  "8-5":"1d8ExNaLHJ10jNSPypqOxPP4crE8NAyZ_",

   /* ===== BD 9 ===== */
  "9-1":"1unfnLakAgCAFsLECg5EKw__Kc5KD3-U9",
  "9-2":"1Qel06bfhCZmaTF1hSFDBjMq6l7AFCiuM",
  "9-3":"1inHdG-SoVpx0aTjupSWfiEwdo7m_hubK",
  "9-4":"1eevRufbh54eQ6FQcuY6hVVXqsXNi2XS8",

   /* ===== BD 10 ===== */
  "10-1":"1fU7F_DmCRfLz4Nhoz5_yWf7QgeZHlJtl",
  "10-2":"127en1IoodceEBvcLYC9qd44NjjQyG8bi",
  "10-3":"1bXvcshsrAlpq1fVt_OX1oQyOfqb6G9sx",



  /* ===== BD 101 ===== */
  "101-1":"1Ek35tZr3bxNtxujXetRj4rfZ36tIrK12",
  "101-2":"1sCHdwMrli5Me2nXc5nivYuh7KgxtWwZ9",
  "101-3":"1LOavWZ_99FZhnCD9IOrHpFtFyBct3jjx",
  "101-4":"1pJ-47FD3Q3HUANQD-ZAeajTEw8EYGepH",
  "101-5":"12ZZA2UpbnHvk6q25JNydI726nEA4aB0g",
  "101-6":"1OrC77GdXqiSfkYpFLXcFbNWK2tEcLo0T",
  "101-7":"1NzvF0tPANcFOzJ6VtEy1VN2lpsrWCEr7",
  "101-8":"1Djdjgs23rj7OgOzZ7UmBvoeiChntTS0h",
  "101-9":"196um8hOY-5vpxUB4q4nubDDIkfU0gXxX",
  "101-10":"11cSwJXs6we8_MibkhabLBVbee2HHI92w",
  "101-11":"1_gTnyguNO5rne3VKveJYvhMpK_Z_7WMA",
  "101-12":"13flYV9utYrrFrQ8KSplZOuj7lbQz7GfR",
  "101-13":"1V9fkg4jGMV84QBYT_dHWr5-DaNm4pjDt",
  "101-14":"1vN7X-O0GqmL1EozztpGsp52DPBVPiXEA",
  "101-15":"1FaOGGL0dRcyMaYaPjBFf-AFdvT1omk6_",
  "101-16":"1VHgcZrdt3ZQS5Z-5skREfzN7vhdvyFR_",
  "101-17":"1WbIi6h-CGkkegI_nFg6EvDXYrtooSz8t",
  "101-18":"1SS-SVb7QsRVQ_w6k09P9m34N8ccaKEA1",
  "101-19":"19hQP-AzFiMtlHae92cSrBIvA_1vb-9OO",
  "101-20":"1szzzNNStb_YLC7mDQez9TK-nKhH0D8oR",
  "101-21":"1vp50LKPo4bpTI19-aU5DcERD4yjK8E9v",





  /* ===== BD 11 ===== */
  "11-1":"1d-weihPKFd5q0crZUt4-eTeLtq8lYjll",
  "11-2":"1GoAL-mF0P58cCiKiboMUL5E-jOlAW8mv",
  "11-3":"1O9-sxhCwmAnQ0ciQUYqWPBsZptuLheMv",
  "11-4":"1gv2uo1EtQ36N1IMfEUczJ4NRPEEQeKYm",
  "11-5":"1uSXEu__EaxK8td12qRXPy40mV5G8ZkoP",
  "11-6":"1uuehbdXxNWmVGEFETWB2u4FiLkGSSwEi",

  /* ===== BD 12 ===== */
  "12-1":"1N6bqcxBY4SyS6uefzjGh109KP_AZj0oB",
  "12-2":"1AMS9yfDG10fgMpycmGCVZ0jDtdLIKwXN",
  "12-3":"1AsHN0ni9IEyjkKyTGA-JTQnSTMxa35yh",
  "12-4":"199fPeTp7CQGiCCWFii0GoTZ9dO9Q80ic",
  "12-5":"11LUzIuFUdrVbNw_QOTNtiNiyNhZKYwXk",
  "12-6":"1YNRMSGbFTncsMF-BEml8LmzbRvrX6_vB",

  /* ===== BD 13 ===== */
  "13-1":"1v9P7kJJWVE1RU6OoncUxiOJQHCevV6fB",
  "13-2":"1V_ZZX1ZrATKlq0XNgNbkBVZ6K8uOIYwl",
  
  /* ===== BD 14 ===== */
  "14-1":"1Z5oHol6dTo--tvU4GVPiKrcZ0IKqap7r",
  "14-2":"1rolxQU3-HXo_GBu9jDYmgRwIpVtN01un",
  "14-3":"1A2fF39-xSzlcQA86-nYkSd9qQ9f-_e8R",
  "14-4":"1kVTEPpVeSf174O6wYpyTCOrGQZgfiWc-",

  /* ===== BD 15 ===== */
  "15-1":"1O3kRNKp09x4UkvnoJgK_-n1LFfMHCBMN",
  "15-2":"1JA28k5kWQ9_zLALyZwa7biVrziQBG9Nz",

  /* ===== BD 16 ===== */
  "16-1":"1eMF5eBnztYvcU0lw8S4PvCVBTuasPROk",
  "16-2":"1SJ4wUdSkprfFVm9BzDGwU0U9Y6oeNT0n",
  "16-3":"1HGQuRAL_siooItO2_zvblyavdH1kKcTJ",
  "16-4":"1OcymmeJbA7ZnErxdxBdCT-DFK4zEIOoA",
  "16-5":"18fEnPDzjT-8gFHkDRD1XB7MvthU6H_nS",

   /* ===== BD 17 ===== */
  "17-1":"1etRT4xWVsekJHAOL98GnMoIOsMqmyMd2",
  "17-2":"1E41t1-94z81XAefXXuxGznPLm9NghqVL",
  "17-3":"1lYev-EGAqdXVybVgXH1tjbP2iApEdVYR",
  "17-4":"12Q74BTG8fmbg143zVSsGI-7eOP_3G0hm",

   /* ===== BD 18 ===== */
  "18-1":"13POnscwv2UKyEoQQfxO3x7NYYA223h9m",
  "18-2":"1WFbsXLg25wh_DP7sXggQ6Ly1Rc2w52p_",
  "18-3":"1i9w3Zg-QCKtNGoaXuL5k2lThM4pwEmRe",
  "18-4":"1e4_2Eb3B8lkipFrpMoFXWVnNEzQzjYqo",
  "18-5":"1rRKFNzZtY2CoSIe2G3mx2h4uTb88w8C5",
  "18-6":"1pPhEMvoc25TlWjdGd4aHL1l9qUnav84G",
  "18-7":"1ZrGAOqQZ4E9_QSlBBfL74kw8I_XS071Y",
  "18-8":"1wucJinpMPNZgBmqYzpZH4ftBJ5pBfgIF",
  "18-9":"1cDrAWkVIgkvTd7ZADOS0EAI10tjurCQr",
  "18-10":"1oqQHvrx1oODydLDnkICd_IzfXwMbs6Ez",
  "18-11":"1uXAZ7qlI87meVs2fdLO0DBg7xxwLSHNP",
  "18-12":"14I3iwRt3EWTHN8hnukg1fVh9T_ZpanQT",
  "18-13":"1_42X0vo6mkc-BpEBC-YycNhD3tVjHpJ7",

   /* ===== BD 19 ===== */
  "19-1":"1UXziZqNMBVkhhD_GNg4Lafe4SQ4GBUZ1",
  "19-2":"1-GHGsoIUHjez-ONUlp8q8-l0X0FtVurR",
  "19-3":"1a7dMIFIlVbwfSKMUz-6Z1f1VHtTAVJZH",
  "19-4":"1cA78E2ml1rDZusALeppDPaOIvfqn6BWZ",
  "19-5":"1I6HgGyAs-D0pdSKosv68gZj8Ijw611KQ",
  "19-6":"1a71LMkhDbkMZi3dU7bPvgZlNUBUdC4LU",
  "19-7":"1lP7wSnfyRr1tCnDIVdBtAzG90P8XZ9oe",
  "19-8":"14ZM0DlLo9vxnU1c1vN4secI2aLsC4orT",
  "19-9":"11eE1MEJ9nkROYrYaUNFf_G158WBxg4mo",
  "19-10":"1jjIdTeP9uEdHQe6nJtVh3NFdJWakVRqu",
  "19-11":"15VEt_dzgXxaJrj_PdBgMTMylTYg_Fi1A",
  "19-12":"1vWFZT_vk2wKQKAxutKkwds7YPL2HFrUy",
  "19-13":"1b1zdzNJdSvGXRkS8c_40EDFpu7ZOAtJO",
  "19-14":"1pR5l69Az3D95IZbWVIC3prwhPToXw3rP",

   /* ===== BD 20 ===== */
  "20-1":"1VUBGcaQ7Kyuu8mryGSeQ_t9EEO24urHp",
  "20-2":"1iRCTXaekjwV8jc8ByEKmTDp_7TJTxZUL",
  "20-3":"1nqOUVUNImyDU5KGWcJDdLoHbdmhoZVAp",
  "20-4":"1KLFjwbCsLnyP7A1lQKRe3q6NYp3DTXV8",
  "20-5":"1EhTgEatUmRV18AfItXoEqmiKphti-Ejs",
  "20-6":"1E-wWnpSrABhZxeo-xYgi3Oc4Jql_6VOO",
  "20-7":"1xK5pBAV6U7BAM15s7GqHmu_VMfPxhxp4",
  "20-8":"11WEEjCQSYmACIK6TIKQg1oMuhWf8Lb0P",
  "20-9":"1Br8sjJxZXidg8AkkdrQGpEIRgkwCfl49",
  "20-10":"1TAb1bdimGu06TCGZfQu7rdkTPOojl617",
  "20-11":"1j6LA24qUICuEbB8xmUfBQrLMi8jiTtW2",
  "20-12":"1uuAemId5bjhum0cMhV2jpeDQTlg3LV9p",
  "20-13":"1qtJv3_EISvVx_l65lpyHJmOVATCGRBGv",
  "20-14":"1CRPWquB0AdzaFpXgIeKXHtjIGkJXGe_z",
  "20-15":"1IvUz_V-QQJbISUd6El7OBiSvr27rpJf7",
  "20-16":"1BVMtbn7SWPqKoQ6BEWqQ0vHXvXI92PGl",
  "20-17":"1rLXBRtEomlAsCFP3VWs6UFn7_QgyyPk7",
  "20-18":"1Rsw1ZYUZmkH0T9wal9Gb82KjWDZUTQz9",
  "20-19":"1JEn1AropczSqyoP0H2Gvh8pHNVILtjnE",
  "20-20":"19y9Vb9oAGK3k15vCBq6qldAjBIuBdr0W"
};


/* ===============================
   🔒 CHECK BD
================================ */
const bd = bds[bdId];

if (!bd) {
  alert("BD introuvable");
  location.href="index.html";
}

/* ===============================
   🎨 UI
================================ */
document.getElementById("titre").textContent = bd.titre;
document.getElementById("cover").src = bd.image;

const viewer = document.getElementById("pdf-viewer");
const chapitreTitle = document.getElementById("chapitre-title");

let chapitre = 1;

const cachePDF = {};

function getDriveURL(id){
  return `${DRIVE_PREVIEW}${id}/preview?embedded=true`;
}

function preloadChapitre(num){

  const key = `${bdId}-${num}`;
  const fileId = driveFiles[key];

  if(!fileId || cachePDF[key]) return;

  const iframe=document.createElement("iframe");
  iframe.src=getDriveURL(fileId);
  iframe.style.display="none";

  document.body.appendChild(iframe);
  cachePDF[key]=iframe;
}

function chargerChapitre(){

  const key=`${bdId}-${chapitre}`;
  const fileId=driveFiles[key];

  if(!fileId){
    chapitreTitle.textContent="❌ Chapitre indisponible";
    viewer.src="";
    return;
  }

  chapitreTitle.textContent=`📖 Chapitre ${chapitre}`;
  viewer.src=getDriveURL(fileId);

  preloadChapitre(chapitre+1);
}

chargerChapitre();

/* ===============================
   🔒 AD GATE
================================ */
function afficherBoutonPub(next){

  const gate=document.createElement("div");

  gate.style=`
    position:fixed;
    inset:0;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index:9999;
    color:white;
  `;

  gate.innerHTML=`
    <h2>🔒 Chapitre verrouillé</h2>
    <p>Regardez une publicité pour continuer</p>
    <button id="watchAdBtn"
      style="
      margin-top:20px;
      padding:15px 30px;
      background:#e50914;
      border:none;
      color:white;
      border-radius:10px;
      cursor:pointer;">
      ▶ Regarder
    </button>
  `;

  document.body.appendChild(gate);

  document.getElementById("watchAdBtn").onclick=()=>{
    gate.remove();
    showRewardedAd(next);
  };
}

/* ===============================
   ▶ NEXT BUTTON
================================ */
document.getElementById("nextBtn").onclick=()=>{

  if(chapitre>=bd.chapitres){
    alert("📚 Fin de la BD");
    return;
  }

  afficherBoutonPub(()=>{
    chapitre++;
    chargerChapitre();
  });
};
