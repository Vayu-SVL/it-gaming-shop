// ========== Product Data ==========
// ຂໍ້ມູນສິນຄ້າທັງໝົດ ປະກອບມີທັງພາສາລາວ ແລະ ອັງກິດ
const products = [
    // ========== ໝວດໝູ່: ເມົ້າເກມມິ້ງ (Gaming Mice) ==========
    { 
        id: 1, 
        name: { lo: "Logitech G Pro X Superlight 2", en: "Logitech G Pro X Superlight 2" }, 
        price: 3990000, 
        category: "mouse", 
        image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2/new-gallery-assets-2025/pro-x-superlight-2-mice-top-angle-black-gallery-1.png", 
        version: "2024", 
        emoji: "🖱️", 
        detail: { 
            lo: "ເຊັນເຊີ HERO 2 (32,000 DPI) | ໄຮ້ສາຍ LIGHTSPEED (Polling Rate 4,000Hz) | ນ້ຳໜັກ 60g | ປຸ່ມ LIGHTFORCE Hybrid | ແບັດ 95 ຊົ່ວໂມງ", 
            en: "HERO 2 sensor (32,000 DPI) | LIGHTSPEED wireless (4,000Hz polling) | 60g weight | LIGHTFORCE Hybrid switches | 95hr battery" 
        } 
    },
    { 
        id: 2, 
        name: { lo: "Razer DeathAdder V3 Pro", en: "Razer DeathAdder V3 Pro" }, 
        price: 3590000, 
        category: "mouse", 
        image: "https://assets3.razerzone.com/j_IMCWzChB8GhSN_ipUIw9fjaEU=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhf5%2Fh6d%2F9636627546142%2F230822-viperv2pro-w-hyperpolling-1500x1000-1.jpg", 
        version: "2024", 
        emoji: "🖱️", 
        detail: { 
            lo: "ເຊັນເຊີ Focus Pro 30K Optical | ໄຮ້ສາຍ HyperSpeed (ຮອງຮັບ 8,000Hz) | ນ້ຳໜັກ 63g | ຮູບຊົງ Ergonomic | ປຸ່ມ Optical Gen-3", 
            en: "Focus Pro 30K Optical sensor | HyperSpeed wireless (8,000Hz compatible) | 63g weight | Ergonomic shape | Optical Gen-3 switches" 
        } 
    },
    { 
        id: 3, 
        name: { lo: "ASUS ROG Harpe Ace Aim Lab Edition", en: "ASUS ROG Harpe Ace Aim Lab Edition" }, 
        price: 3290000, 
        category: "mouse", 
        image: "https://dlcdnwebimgs.asus.com/gain/0F9B888C-4649-4829-B3C9-BDD8734907A4/w717/h525/fwebp", 
        version: "2024", 
        emoji: "🖱️", 
        detail: { 
            lo: "ເຊັນເຊີ ROG AimPoint (36,000 DPI) | ໄຮ້ສາຍ SpeedNova/BT/ສາຍ | ນ້ຳໜັກ 54g | ຮ່ວມມືກັບ Aim Lab | ວັດສະດຸ Bio-based nylon", 
            en: "ROG AimPoint sensor (36,000 DPI) | SpeedNova/BT/wired | 54g weight | Aim Lab collaboration | Bio-based nylon material" 
        } 
    },
    { 
        id: 4, 
        name: { lo: "SteelSeries Aerox 3 Wireless (FaZe Clan)", en: "SteelSeries Aerox 3 Wireless FaZe Clan Edition" }, 
        price: 2590000, 
        category: "mouse", 
        image: "https://images.ctfassets.net/hmm5mo4qf4mf/5HgkBzBn6smRlx1iRVmxgU/b73afd509ada7a986e28df9774ff608c/aerox_3_wl_black_img_buy_01.png__1920x1080_crop-fit_optimize_subsampling-2-3637.png?fm=webp&q=90&fit=scale&w=1920", 
        version: "2024", 
        emoji: "🖱️", 
        detail: { 
            lo: "ເຊັນເຊີ TrueMove Air (18,000 CPI) | ໄຮ້ສາຍ 2.4GHz/BT | ນ້ຳໜັກ 68g | ດີໄຊນ໌ Honeycomb IP54 | ແບັດ 200 ຊົ່ວໂມງ (BT)", 
            en: "TrueMove Air sensor (18,000 CPI) | 2.4GHz/BT wireless | 68g weight | IP54 Honeycomb design | 200hr battery (BT mode)" 
        } 
    },
    { 
        id: 5, 
        name: { lo: "BenQ ZOWIE EC2-CW", en: "BenQ ZOWIE EC2-CW" }, 
        price: 3990000, 
        category: "mouse", 
        image: "https://image.benq.com/is/image/benqco/ec2-dw-front-left-45?$ResponsivePreset$&fmt=png-alpha", 
        version: "2024", 
        emoji: "🖱️", 
        detail: { 
            lo: "ເຊັນເຊີ 3370 (3,200 DPI) | ໄຮ້ສາຍພ້ອມກັບ Enhanced Wireless Receiver | ນ້ຳໜັກ 77g | ອອກແບບຕາມຫຼັກສະຮີລະສາດ | Plug and Play", 
            en: "3370 sensor (3,200 DPI) | Wireless with Enhanced Receiver | 77g weight | Ergonomic design | Plug and Play" 
        } 
    },

    // ========== ໝວດໝູ່: ຄີບອດເກມມິ້ງ (Gaming Keyboards) ==========
    { 
        id: 6, 
        name: { lo: "SteelSeries Apex Pro TKL (2023)", en: "SteelSeries Apex Pro TKL (2023)" }, 
        price: 6590000, 
        category: "keyboard", 
        image: "https://images.ctfassets.net/hmm5mo4qf4mf/SPfG2ShnQICi8hvRZCBBo/48aa0b04cc08a25ca856f0fb0a72ede8/apex_pro_tkl_wl_black_imgbuy_1.png__1920x1080_crop-fit_optimize_subsampling-2-2107.png", 
        version: "2023", 
        emoji: "⌨️", 
        detail: { 
            lo: "ສະວິດ OmniPoint 2.0 Adjustable HyperMagnetic | ຂະໜາດ TKL | ປັບ Actuation Point 0.1-4.0mm | Rapid Trigger | ຈໍ OLED", 
            en: "OmniPoint 2.0 Adjustable HyperMagnetic switches | TKL size | Adjustable actuation 0.1-4.0mm | Rapid Trigger | OLED display" 
        } 
    },
    { 
        id: 7, 
        name: { lo: "Razer Huntsman V3 Pro TKL", en: "Razer Huntsman V3 Pro TKL" }, 
        price: 6290000, 
        category: "keyboard", 
        image: "https://assets3.razerzone.com/Co_4VN4Nenryf4b50t-waK1qxwE=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh32%2Fhbe%2F9980309831710%2F251028-huntsman-v3-pro-tkl-8khz-b-1500x1000-4.jpg", 
        version: "2024", 
        emoji: "⌨️", 
        detail: { 
            lo: "ສະວິດ Razer Analog Optical Gen-2 | ຂະໜາດ TKL | Rapid Trigger | ປຸ່ມໝຸນມັລຕິມີເດຍ | ຝາຄອບປຸ່ມ PBT", 
            en: "Razer Analog Optical Gen-2 switches | TKL size | Rapid Trigger | Multi-function roller | PBT keycaps" 
        } 
    },
    { 
        id: 8, 
        name: { lo: "ASUS ROG Azoth", en: "ASUS ROG Azoth" }, 
        price: 5990000, 
        category: "keyboard", 
        image: "https://dlcdnwebimgs.asus.com/gain/145896AC-B462-4466-A1FE-935F085741F3/w717/h525/fwebp", 
        version: "2024", 
        emoji: "⌨️", 
        detail: { 
            lo: "ສະວິດ ROG NX Mechanical (Pre-lubed) | ຂະໜາດ 75% | Gasket Mount | ໂຟມຊັບສຽງ 3 ຊັ້ນ | ຈໍ OLED 2 ນິ້ວ", 
            en: "ROG NX Mechanical switches (Pre-lubed) | 75% size | Gasket Mount | 3-layer foam | 2-inch OLED display" 
        } 
    },
    { 
        id: 9, 
        name: { lo: "Corsair K70 MAX RGB Magnetic-Mechanical", en: "Corsair K70 MAX RGB" }, 
        price: 6790000, 
        category: "keyboard", 
        image: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Gaming-Keyboards/k70-max/CH-910961G-NA/CH-910961G_01.webp", 
        version: "2024", 
        emoji: "⌨️", 
        detail: { 
            lo: "ສະວິດ CORSAIR MGX Magnetic | ຂະໜາດ Full-size | Rapid Trigger | Polling Rate 8,000Hz | ທີ່ຮອງຂໍ້ມື", 
            en: "CORSAIR MGX Magnetic switches | Full-size | Rapid Trigger | 8,000Hz polling rate | Wrist rest included" 
        } 
    },
    { 
        id: 10, 
        name: { lo: "Logitech G915 LIGHTSPEED TKL", en: "Logitech G915 LIGHTSPEED TKL" }, 
        price: 4990000, 
        category: "keyboard", 
        image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g915-x-lightspeed-tkl/gallery/g915-x-tkl-wireless-keyboard-gallery-1-us-intl.png", 
        version: "2024", 
        emoji: "⌨️", 
        detail: { 
            lo: "ສະວິດ GL Low-Profile (Clicky/Linear/Tactile) | ຂະໜາດ TKL ບາງພິເສດ | ຕົວເຮືອນອາລູມິນຽມ | ເຊື່ອມຕໍ່ LIGHTSPEED", 
            en: "GL Low-Profile switches (Clicky/Linear/Tactile) | Ultra-slim TKL size | Aluminum body | LIGHTSPEED wireless" 
        } 
    },

    // ========== ໝວດໝູ່: ຫູຟັງເກມມິ້ງ (Gaming Headsets) ==========
    { 
        id: 11, 
        name: { lo: "Razer BlackShark V2 Pro (2023)", en: "Razer BlackShark V2 Pro (2023)" }, 
        price: 5990000, 
        category: "headphone", 
        image: "https://assets3.razerzone.com/fkA5FviRQXDFNmRX10um4lF-HGA=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh5e%2Fhb9%2F9761352122398%2F240409-blackshark-v2-pro-ps-black-1500x1000-1.jpg", 
        version: "2023", 
        emoji: "🎧", 
        detail: { 
            lo: "ໄດຣເວີ TriForce Titanium 50mm | ໄຮ້ສາຍ HyperSpeed/BT | ໄມ HyperClear Super Wideband | ມີໂປຣໄຟລ໌ສຽງ FPS", 
            en: "TriForce Titanium 50mm drivers | HyperSpeed/BT wireless | HyperClear Super Wideband mic | FPS audio profiles" 
        } 
    },
    { 
        id: 12, 
        name: { lo: "Logitech G Pro X 2 LIGHTSPEED", en: "Logitech G Pro X 2 LIGHTSPEED" }, 
        price: 7990000, 
        category: "headphone", 
        image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-3-pro-x-2-lightspeed-gaming-headset-black.png", 
        version: "2024", 
        emoji: "🎧", 
        detail: { 
            lo: "ໄດຣເວີ PRO-G GRAPHENE 50mm | LIGHTSPEED/BT/3.5mm | ໄມ Blue VO!CE | ສຽງຊັດເຈນແຍກທິດທາງ", 
            en: "PRO-G GRAPHENE 50mm drivers | LIGHTSPEED/BT/3.5mm | Blue VO!CE mic | Precise spatial audio" 
        } 
    },
    { 
        id: 13, 
        name: { lo: "SteelSeries Arctis Nova Pro Wireless", en: "SteelSeries Arctis Nova Pro Wireless" }, 
        price: 9990000, 
        category: "headphone", 
        image: "https://images.ctfassets.net/hmm5mo4qf4mf/3KlREurbFlRiCfbskvk9ax/d1bc09812fd45843bd7df9fc9cb033f9/arctis_nova_pro_wl_black_ps_img_buy_1.png__1920x1080_crop-fit_optimize_subsampling-2-239.png", 
        version: "2024", 
        emoji: "🎧", 
        detail: { 
            lo: "Premium High-Fidelity Drivers | ໄຮ້ສາຍ 2.4GHz (Base Station) + BT | ANC | ສຽງ Spatial Audio 360° | ປ່ຽນແບັດໄດ້ຕະຫຼອດ", 
            en: "Premium High-Fidelity Drivers | 2.4GHz wireless + BT | ANC | 360° Spatial Audio | Swappable battery" 
        } 
    },
    { 
        id: 14, 
        name: { lo: "HyperX Cloud III Wireless", en: "HyperX Cloud III Wireless" }, 
        price: 4590000, 
        category: "headphone", 
        image: "https://row.hyperx.com/cdn/shop/files/hyperx_cloud_iii_wireless_black_77z45aa_main_1.jpg?v=1764893494", 
        version: "2024", 
        emoji: "🎧", 
        detail: { 
            lo: "ໄດຣເວີ Angled 53mm | ໄຮ້ສາຍ 2.4GHz | ໃສ່ສະບາຍ Signature HyperX Comfort | ແບັດ 120 ຊົ່ວໂມງ", 
            en: "Angled 53mm drivers | 2.4GHz wireless | Signature HyperX Comfort | 120hr battery life" 
        } 
    },
    { 
        id: 15, 
        name: { lo: "ASUS ROG Cetra True Wireless SpeedNova", en: "ASUS ROG Cetra True Wireless SpeedNova" }, 
        price: 3490000, 
        category: "headphone", 
        image: "https://dlcdnwebimgs.asus.com/files/media/67F7F069-0196-4990-BEEE-05F3D5FC8D1C/v1/img/gallery/1.jpg", 
        version: "2024", 
        emoji: "🎧", 
        detail: { 
            lo: "ໄດຣເວີ 10mm ASUS Essence | ໄຮ້ສາຍ 2.4GHz/BT (SpeedNova) | Earbuds In-Ear | ANC | ໄມ Bone Conduction", 
            en: "10mm ASUS Essence drivers | 2.4GHz/BT wireless (SpeedNova) | In-Ear earbuds | ANC | Bone conduction mic" 
        } 
    },

    // ========== ໝວດໝູ່: ເຄື່ອງຄອມພີວເຕີ້ຕັ້ງໂຕະ (Gaming PC Desktops) ==========
    { 
        id: 16, 
        name: { lo: "ASUS ROG Strix G35CA", en: "ASUS ROG Strix G35CA" }, 
        price: 85900000, 
        category: "pc", 
        image: "https://dlcdnwebimgs.asus.com/files/media/12B5E0C8-7771-4D54-9A6D-BD7F4E035C4E/v1/images/large/2x/design.webp", 
        version: "2024", 
        emoji: "🖥️", 
        detail: { 
            lo: "CPU Intel i9-13900KF | GPU RTX 4090 24GB | RAM 64GB DDR5 | SSD 2TB NVMe | ລະບາຍນ້ຳ Liquid Cooling | ຊ່ອງ Hot-swap SSD", 
            en: "Intel i9-13900KF CPU | RTX 4090 24GB GPU | 64GB DDR5 RAM | 2TB NVMe SSD | Liquid cooling | Hot-swap SSD bay" 
        } 
    },
    { 
        id: 17, 
        name: { lo: "MSI Infinite RS 13th", en: "MSI Infinite RS 13th" }, 
        price: 79900000, 
        category: "pc", 
        image: "https://storage-asset.msi.com/global/picture/product/product_1667931061ef6b32e5c00a50ca85d6e2f7cee5420e.webp", 
        version: "2024", 
        emoji: "🖥️", 
        detail: { 
            lo: "CPU Intel i9-13900KS | GPU RTX 4090 24GB | RAM 32GB DDR5 | SSD 2TB NVMe | ລະບາຍນ້ຳ 360mm | ອັບເກຣດງ່າຍ", 
            en: "Intel i9-13900KS CPU | RTX 4090 24GB GPU | 32GB DDR5 RAM | 2TB NVMe SSD | 360mm liquid cooling | Easy upgrade" 
        } 
    },
    { 
        id: 18, 
        name: { lo: "Corsair One i500", en: "Corsair One i500" }, 
        price: 99900000, 
        category: "pc", 
        image: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Corsair-One/i500/gallery/wood-dark/CORSAIR_ONE_i500_WOOD_DARK_10.webp", 
        version: "2024", 
        emoji: "🖥️", 
        detail: { 
            lo: "CPU Intel i9-14900K | GPU RTX 4090 | RAM 64GB DDR5 | SSD 2TB NVMe | Compact PC ຂະໜາດເລັກ | ລະບາຍນ້ຳທັງ CPU+GPU", 
            en: "Intel i9-14900K CPU | RTX 4090 GPU | 64GB DDR5 RAM | 2TB NVMe SSD | Compact PC size | Liquid cooling for CPU+GPU" 
        } 
    },
    { 
        id: 19, 
        name: { lo: "Alienware Aurora R16", en: "Alienware Aurora R16" }, 
        price: 68900000, 
        category: "pc", 
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r16/media-gallery/liquid/desktop-aw-r16-bk-lqd-cooling-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=476&qlt=100,1&resMode=sharp2&size=476,402&chrss=full", 
        version: "2024", 
        emoji: "🖥️", 
        detail: { 
            lo: "CPU Intel i9-14900KF | GPU RTX 4080 Super 16GB | RAM 32GB DDR5 | SSD 2TB NVMe | ດີໄຊນ໌ Legend 3 | ສຽງງຽບຂຶ້ນ 20%", 
            en: "Intel i9-14900KF CPU | RTX 4080 Super 16GB GPU | 32GB DDR5 RAM | 2TB NVMe SSD | Legend 3 design | 20% quieter" 
        } 
    },
    { 
        id: 20, 
        name: { lo: "HP OMEN 45K Gaming Desktop", en: "HP OMEN 45K Gaming Desktop" }, 
        price: 59900000, 
        category: "pc", 
        image: "https://hp.widen.net/content/cqhz2uexvi/webp/cqhz2uexvi.png?dpi=72&color=ffffff00&w=270", 
        version: "2024", 
        emoji: "🖥️", 
        detail: { 
            lo: "CPU AMD Ryzen 9 7900X | GPU RTX 4080 16GB | RAM 32GB DDR5 | SSD 1TB NVMe | ເຕັກໂນໂລຊີ Cryo Chamber ລະບາຍຄວາມຮ້ອນ", 
            en: "AMD Ryzen 9 7900X CPU | RTX 4080 16GB GPU | 32GB DDR5 RAM | 1TB NVMe SSD | Cryo Chamber cooling technology" 
        } 
    },

    // ========== ໝວດໝູ່: ໂນດບຸກເກມມິ້ງ (Gaming Laptops) ==========
    { 
        id: 21, 
        name: { lo: "ASUS ROG Strix SCAR 18 (2024)", en: "ASUS ROG Strix SCAR 18 (2024)" }, 
        price: 69900000, 
        category: "notebook", 
        image: "https://dlcdnwebimgs.asus.com/gain/29ADB838-6337-4979-9CD7-09ECB34BA05F/h300/w300/fwebp", 
        version: "2024", 
        emoji: "💻", 
        detail: { 
            lo: "ຈໍ 18\" QHD+ Mini LED 240Hz | CPU i9-14900HX | GPU RTX 4090 (175W) | RAM 32GB DDR5 | SSD 2TB | ລະບາຍ Tri-Fan + Liquid Metal", 
            en: "18\" QHD+ Mini LED 240Hz display | i9-14900HX CPU | RTX 4090 175W GPU | 32GB DDR5 RAM | 2TB SSD | Tri-Fan + Liquid Metal cooling" 
        } 
    },
    { 
        id: 22, 
        name: { lo: "MSI Titan 18 HX A14V", en: "MSI Titan 18 HX A14V" }, 
        price: 99900000, 
        category: "notebook", 
        image: "https://storage-asset.msi.com/global/picture/image/feature/nb/2023_RPLS/titan-18-hx-a14v/images/gallery-03.jpg", 
        version: "2024", 
        emoji: "💻", 
        detail: { 
            lo: "ຈໍ 18\" 4K Mini LED 120Hz | CPU i9-14900HX | GPU RTX 4090 | RAM 128GB DDR5 | SSD 4TB RAID 0 | ຄີບອດ Mechanical Cherry MX", 
            en: "18\" 4K Mini LED 120Hz display | i9-14900HX CPU | RTX 4090 GPU | 128GB DDR5 RAM | 4TB SSD RAID 0 | Cherry MX Mechanical keyboard" 
        } 
    },
    { 
        id: 23, 
        name: { lo: "Razer Blade 16 (2024)", en: "Razer Blade 16 (2024)" }, 
        price: 79900000, 
        category: "notebook", 
        image: "https://assets3.razerzone.com/6wUVZEdcSfB_H26KJwxPDklaDDc=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhbf%2Fhde%2F9876443660318%2F250225-blade-16-s11-black-1500x1000-1.jpg", 
        version: "2024", 
        emoji: "💻", 
        detail: { 
            lo: "ຈໍ 16\" QHD+ OLED 240Hz (0.2ms) | CPU i9-14900HX | GPU RTX 4090 | RAM 32GB DDR5 | SSD 2TB | ຕົວເຄື່ອງອາລູມິນຽມ Unibody", 
            en: "16\" QHD+ OLED 240Hz (0.2ms) display | i9-14900HX CPU | RTX 4090 GPU | 32GB DDR5 RAM | 2TB SSD | Aluminum Unibody chassis" 
        } 
    },
    { 
        id: 24, 
        name: { lo: "Lenovo Legion Pro 7i Gen 9", en: "Lenovo Legion Pro 7i Gen 9" }, 
        price: 58900000, 
        category: "notebook", 
        image: "https://p1-ofp.static.pub//fes/cms/2024/09/12/08rs2dxeb3oz457vizd1gaiyuyzpcn236744.png", 
        version: "2024", 
        emoji: "💻", 
        detail: { 
            lo: "ຈໍ 16\" WQXGA IPS 240Hz | CPU i9-14900HX | GPU RTX 4090 | RAM 32GB DDR5 | SSD 2TB | ລະບາຍ Legion Coldfront 5.0 | ຊິບ AI LA2-Q", 
            en: "16\" WQXGA IPS 240Hz display | i9-14900HX CPU | RTX 4090 GPU | 32GB DDR5 RAM | 2TB SSD | Legion Coldfront 5.0 cooling | LA2-Q AI chip" 
        } 
    },
    { 
        id: 25, 
        name: { lo: "Acer Predator Helios 18", en: "Acer Predator Helios 18" }, 
        price: 64900000, 
        category: "notebook", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0pjFikV1koAGycf8Kur9cu_LcIYH748k2w&s", 
        version: "2024", 
        emoji: "💻", 
        detail: { 
            lo: "ຈໍ 18\" WQXGA Mini LED 250Hz | CPU i9-14900HX | GPU RTX 4090 | RAM 32GB DDR5 | SSD 2TB | ພັດລົມ AeroBlade 3D ລຸ້ນ 5 | ປຸ່ມ WASD MagClick", 
            en: "18\" WQXGA Mini LED 250Hz display | i9-14900HX CPU | RTX 4090 GPU | 32GB DDR5 RAM | 2TB SSD | 5th Gen AeroBlade 3D fan | MagClick WASD keys" 
        } 
    }
];

// ========== App State ==========
// ສະຖານະຂອງແອັບພລິເຄຊັນ
let cart = [];              // ລາຍການສິນຄ້າໃນກະຕ່າ
let discountApplied = false;  // ສະຖານະການໃຊ້ສ່ວນຫຼຸດ
let selectedShipping = 'hung-aloun';  // ຮູບແບບການຂົນສົ່ງທີ່ເລືອກ
let selectedPayment = 'qr';           // ຮູບແບບການຊຳລະທີ່ເລືອກ
let customerData = { name: '', phone: '', email: '', village: '', district: '', province: '' };

// ຄ່າຄົງທີ່ຕ່າງໆ
const shippingCosts = { 'hung-aloun': 20000, 'anousith': 15000, 'mixay': 25000 };
const COUPON_CODE = 'LAO2024';
const DISCOUNT_RATE = 0.05;

// ========== LANGUAGE SWITCH - ຟັງຊັ້ນປ່ຽນພາສາ ==========
// ສ່ວນນີ້ເພີ່ມໃໝ່: ການຈັດການປ່ຽນພາສາລະຫວ່າງ ລາວ ແລະ ອັງກິດ
let currentLang = 'lo'; // ພາສາເລີ່ມຕົ້ນ: ລາວ (lo) ຫຼື ອັງກິດ (en)

// ຂໍ້ມູນສຳລັບແປພາສາ (key: ຂໍ້ຄວາມຕົ້ນສະບັບພາສາລາວ, value: ວັດຖຸທີ່ມີທັງສອງພາສາ)
const translations = {
    // Header
    'ກະຕ່າ': { lo: 'ກະຕ່າ', en: 'Cart' },
    'ຂໍ້ມູນ': { lo: 'ຂໍ້ມູນ', en: 'Profile' },
    'ພາສາ': { lo: 'ພາສາ', en: 'Language' },
    'IT Gaming Shop': { lo: 'IT Gaming Shop', en: 'IT Gaming Shop' },
    'ຮ້ານຂາຍອຸປະກອນເກມມິ່ງຄຸນນະພາບສູງ ສົ່ງຟຣີທົ່ວປະເທດ': { 
        lo: 'ຮ້ານຂາຍອຸປະກອນເກມມິ່ງຄຸນນະພາບສູງ ສົ່ງຟຣີທົ່ວປະເທດ', 
        en: 'High quality gaming gear shop - Free delivery nationwide' 
    },
    
    // Search & Filter
    'ຄົ້ນຫາສິນຄ້າ...': { lo: 'ຄົ້ນຫາສິນຄ້າ...', en: 'Search products...' },
    'ທັງໝົດ': { lo: 'ທັງໝົດ', en: 'All' },
    'ເມົ້າ': { lo: 'ເມົ້າ', en: 'Mouse' },
    'ຄີບອດ': { lo: 'ຄີບອດ', en: 'Keyboard' },
    'ຫູຟັງ': { lo: 'ຫູຟັງ', en: 'Headphone' },
    'PC': { lo: 'PC', en: 'PC' },
    'ໂນດບຸກ': { lo: 'ໂນດບຸກ', en: 'Laptop' },
    
    // Products Section
    'ສິນຄ້າທັງໝົດ': { lo: 'ສິນຄ້າທັງໝົດ', en: 'All Products' },
    'ລຸ້ນ': { lo: 'ລຸ້ນ', en: 'Version' },
    'ເພີ່ມໃສ່ກະຕ່າ': { lo: 'ເພີ່ມໃສ່ກະຕ່າ', en: 'Add to Cart' },
    'ເບິ່ງລາຍລະອຽດ': { lo: 'ເບິ່ງລາຍລະອຽດ', en: 'View Details' },
    'ບໍ່ພົບສິນຄ້າທີ່ຄົ້ນຫາ': { lo: 'ບໍ່ພົບສິນຄ້າທີ່ຄົ້ນຫາ', en: 'No products found' },
    'ກີບ': { lo: 'ກີບ', en: 'LAK' },
    
    // Cart Modal
    'ກະຕ່າສິນຄ້າ': { lo: 'ກະຕ່າສິນຄ້າ', en: 'Shopping Cart' },
    'ລາຍການສິນຄ້າ': { lo: 'ລາຍການສິນຄ້າ', en: 'Cart Items' },
    'ຍັງບໍ່ມີສິນຄ້າ': { lo: 'ຍັງບໍ່ມີສິນຄ້າ', en: 'No items in cart' },
    'ລຶບ': { lo: 'ລຶບ', en: 'Remove' },
    'ບໍລິການຂົນສົ່ງ': { lo: 'ບໍລິການຂົນສົ່ງ', en: 'Shipping Method' },
    'ຮຸ່ງອາລຸ່ນ': { lo: 'ຮຸ່ງອາລຸ່ນ', en: 'Hung Aloun' },
    'ອານຸສິດ': { lo: 'ອານຸສິດ', en: 'Anousith' },
    'ມີໄຊ': { lo: 'ມີໄຊ', en: 'Mixay' },
    'ຮູບແບບການຊຳລະ': { lo: 'ຮູບແບບການຊຳລະ', en: 'Payment Method' },
    'ເງິນສົດ': { lo: 'ເງິນສົດ', en: 'Cash' },
    'ບັດເຄຣດິດ/ເດບິດ': { lo: 'ບັດເຄຣດິດ/ເດບິດ', en: 'Credit/Debit Card' },
    'ລະຫັດສ່ວນຫຼຸດ': { lo: 'ລະຫັດສ່ວນຫຼຸດ', en: 'Discount Code' },
    'ປ້ອນລະຫັດ (LAO2024)': { lo: 'ປ້ອນລະຫັດ (LAO2024)', en: 'Enter code (LAO2024)' },
    'ໃຊ້ລະຫັດ': { lo: 'ໃຊ້ລະຫັດ', en: 'Apply' },
    'ໃຊ້ແລ້ວ': { lo: 'ໃຊ້ແລ້ວ', en: 'Applied' },
    'ຍອດລວມສິນຄ້າ': { lo: 'ຍອດລວມສິນຄ້າ', en: 'Subtotal' },
    'ຄ່າຂົນສົ່ງ': { lo: 'ຄ່າຂົນສົ່ງ', en: 'Shipping' },
    'ສ່ວນຫຼຸດ': { lo: 'ສ່ວນຫຼຸດ', en: 'Discount' },
    'ຍອດສຸດທ້າຍ': { lo: 'ຍອດສຸດທ້າຍ', en: 'Total' },
    'ຊຳລະເງິນ ແລະ ອອກໃບບິນ': { lo: 'ຊຳລະເງິນ ແລະ ອອກໃບບິນ', en: 'Checkout & Print Receipt' },
    'ໄດ້ຮັບສ່ວນຫຼຸດ 5% ແລ້ວ!': { lo: 'ໄດ້ຮັບສ່ວນຫຼຸດ 5% ແລ້ວ!', en: '5% discount applied!' },
    'ລະຫັດສ່ວນຫຼຸດບໍ່ຖືກຕ້ອງ': { lo: 'ລະຫັດສ່ວນຫຼຸດບໍ່ຖືກຕ້ອງ', en: 'Invalid discount code' },
    
    // User Modal
    'ຂໍ້ມູນລູກຄ້າ': { lo: 'ຂໍ້ມູນລູກຄ້າ', en: 'Customer Information' },
    'ຊື່ລູກຄ້າ *': { lo: 'ຊື່ລູກຄ້າ *', en: 'Customer Name *' },
    'ເບີໂທ *': { lo: 'ເບີໂທ *', en: 'Phone Number *' },
    'ອີເມວ': { lo: 'ອີເມວ', en: 'Email' },
    'ບ້ານ *': { lo: 'ບ້ານ *', en: 'Village *' },
    'ເມືອງ *': { lo: 'ເມືອງ *', en: 'District *' },
    'ແຂວງ *': { lo: 'ແຂວງ *', en: 'Province *' },
    'ບັນທຶກຂໍ້ມູນ': { lo: '💾 ບັນທຶກຂໍ້ມູນ', en: '💾 Save Information' },
    
    // Product Detail Modal
    'ລາຍລະອຽດສິນຄ້າ': { lo: 'ລາຍລະອຽດສິນຄ້າ', en: 'Product Details' },
    'ສະເປັກສິນຄ້າ': { lo: 'ສະເປັກສິນຄ້າ', en: 'Specifications' },
    
    // Toast Messages
    'ເພີ່ມໃສ່ກະຕ່າແລ້ວ': { lo: 'ເພີ່ມໃສ່ກະຕ່າແລ້ວ', en: 'added to cart' },
    'ກະລຸນາເລືອກສິນຄ້າກ່ອນ': { lo: 'ກະລຸນາເລືອກສິນຄ້າກ່ອນ', en: 'Please select items first' },
    'ກະລຸນາປ້ອນຂໍ້ມູນລູກຄ້າ (ກົດໄອຄອນຄົນ)': { lo: 'ກະລຸນາປ້ອນຂໍ້ມູນລູກຄ້າ (ກົດໄອຄອນຄົນ)', en: 'Please enter customer information (click profile icon)' },
    'ຊຳລະເງິນສຳເລັດ!': { lo: 'ຊຳລະເງິນສຳເລັດ!', en: 'Payment successful!' },
    'ບັນທຶກຂໍ້ມູນລູກຄ້າແລ້ວ': { lo: 'ບັນທຶກຂໍ້ມູນລູກຄ້າແລ້ວ', en: 'Customer information saved' },
    'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ': { lo: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ', en: 'Please fill all required fields' }
};

/**
 * ຟັງຊັ້ນແປພາສາ - ດຶງຂໍ້ຄວາມຕາມພາສາທີ່ເລືອກ
 * @param {string} key - ຂໍ້ຄວາມຕົ້ນສະບັບພາສາລາວ
 * @returns {string} ຂໍ້ຄວາມທີ່ແປແລ້ວຕາມພາສາປັດຈຸບັນ
 */
function t(key) {
    return translations[key]?.[currentLang] || key;
}

/**
 * ຟັງຊັ້ນແປພາສາທຸກອົງປະກອບໃນໜ້າເວັບ
 * ສ່ວນນີ້ເພີ່ມໃໝ່: ໃຊ້ສຳລັບອັບເດດຂໍ້ຄວາມທັງໜ້າເມື່ອປ່ຽນພາສາ
 */
function translatePage() {
    // Header
    const logoTitle = document.querySelector('.logo h1');
    if (logoTitle) logoTitle.textContent = t('IT Gaming Shop');
    
    const headerDesc = document.querySelector('header p');
    if (headerDesc) headerDesc.textContent = t('ຮ້ານຂາຍອຸປະກອນເກມມິ່ງຄຸນນະພາບສູງ');
    
    // Header actions
    const cartSpan = document.querySelector('#cartIconBtn span:not(.cart-badge)');
    if (cartSpan) cartSpan.textContent = t('ກະຕ່າ');
    
    const userSpan = document.querySelector('#userIconBtn span');
    if (userSpan) userSpan.textContent = t('ຂໍ້ມູນ');
    
    const langSpan = document.querySelector('#langText');
    if (langSpan) langSpan.textContent = t('ພາສາ');
    
    // Search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t('ຄົ້ນຫາສິນຄ້າ...');
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterTexts = ['ທັງໝົດ', 'ເມົ້າ', 'ຄີບອດ', 'ຫູຟັງ', 'PC', 'ໂນດບຸກ'];
    filterBtns.forEach((btn, idx) => {
        if (filterTexts[idx]) btn.textContent = t(filterTexts[idx]);
    });
    
    // Products section title
    const productsTitle = document.querySelector('.products-section h2');
    if (productsTitle) productsTitle.textContent = t('ສິນຄ້າທັງໝົດ');
    
    // Cart modal header
    const cartModalHeader = document.querySelector('#cartModal .modal-header h2');
    if (cartModalHeader) cartModalHeader.innerHTML = `<i class="fas fa-shopping-cart"></i> ${t('ກະຕ່າສິນຄ້າ')}`;
    
    // User modal header
    const userModalHeader = document.querySelector('#userModal .modal-header h2');
    if (userModalHeader) userModalHeader.innerHTML = `<i class="fas fa-user"></i> ${t('ຂໍ້ມູນລູກຄ້າ')}`;
    
    // User modal inputs
    const nameInput = document.getElementById('customerName');
    if (nameInput) nameInput.placeholder = t('ຊື່ລູກຄ້າ *');
    
    const phoneInput = document.getElementById('customerPhone');
    if (phoneInput) phoneInput.placeholder = t('ເບີໂທ *');
    
    const emailInput = document.getElementById('customerEmail');
    if (emailInput) emailInput.placeholder = t('ອີເມວ');
    
    const villageInput = document.getElementById('customerVillage');
    if (villageInput) villageInput.placeholder = t('ບ້ານ *');
    
    const districtInput = document.getElementById('customerDistrict');
    if (districtInput) districtInput.placeholder = t('ເມືອງ *');
    
    const provinceInput = document.getElementById('customerProvince');
    if (provinceInput) provinceInput.placeholder = t('ແຂວງ *');
    
    const saveBtn = document.getElementById('saveCustomerBtn');
    if (saveBtn) saveBtn.innerHTML = t('ບັນທຶກຂໍ້ມູນ');
    
    // Product detail modal
    const detailTitle = document.getElementById('modalProductTitle');
    if (detailTitle) detailTitle.innerHTML = `<i class="fas fa-info-circle"></i> ${t('ລາຍລະອຽດສິນຄ້າ')}`;

    // ຫຼັງຈາກປ່ຽນພາສາ ຈຶ່ງ render ສິນຄ້າໃໝ່ (ເອີ້ນສະເພາະເວລາປ່ຽນພາສາ ບໍ່ແມ່ນໂຫຼດໜ້າ)
    if (document.getElementById('productsGrid')?.children.length > 0) {
        displayProducts();
    }
}

// ========== Helper Functions ==========
// ຟັງຊັ້ນຊ່ວຍຕ່າງໆ

/**
 * ຟັງຊັ້ນຈັດຮູບແບບຕົວເລກເງິນ
 * @param {number} amount - ຈຳນວນເງິນ
 * @returns {string} ຕົວເລກທີ່ມີຮູບແບບແຍກຫຼັກພັນ
 */
function formatMoney(amount) {
    return amount.toLocaleString('lo-LA');
}

/**
 * ຟັງຊັ້ນສະແດງຂໍ້ຄວາມແຈ້ງເຕືອນ (Toast)
 * @param {string} message - ຂໍ້ຄວາມທີ່ຈະສະແດງ
 */
function showToast(message) {
    const toast = document.getElementById('toastMsg');
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

/**
 * ຄຳນວນຍອດລວມສິນຄ້າກ່ອນສ່ວນຫຼຸດ ແລະ ຄ່າຂົນສົ່ງ
 * @returns {number} ຍອດລວມສິນຄ້າ
 */
function getSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/**
 * ດຶງຄ່າຂົນສົ່ງຕາມຮູບແບບທີ່ເລືອກ
 * @returns {number} ຄ່າຂົນສົ່ງ
 */
function getShippingCost() {
    return shippingCosts[selectedShipping] || 20000;
}

/**
 * ຄຳນວນຈຳນວນສ່ວນຫຼຸດ (ຖ້າມີ)
 * @returns {number} ຈຳນວນສ່ວນຫຼຸດ
 */
function getDiscountAmount() {
    return discountApplied ? Math.floor(getSubtotal() * DISCOUNT_RATE) : 0;
}

/**
 * ຄຳນວນຍອດສຸດທ້າຍຫຼັງຫັກສ່ວນຫຼຸດ ແລະ ບວກຄ່າຂົນສົ່ງ
 * @returns {number} ຍອດສຸດທ້າຍ
 */
function getGrandTotal() {
    return getSubtotal() + getShippingCost() - getDiscountAmount();
}

/**
 * ອັບເດດຕົວເລກສິນຄ້າໃນກະຕ່າ (Badge)
 */
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartCountBadge');
    if (badge) badge.textContent = totalItems;
}

// ========== Safe placeholder URL (ປ້ອງກັນ XSS ຈາກ emoji ໃນ onerror) ==========
function getPlaceholderSrc(emoji) {
    return 'https://placehold.co/400x300/667eea/white?text=' + encodeURIComponent(emoji);
}

// ========== Display Products ==========
// ຟັງຊັ້ນສະແດງສິນຄ້າທັງໝົດ (ຮອງຮັບການປ່ຽນພາສາ)
function displayProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';

    const filtered = products.filter(p => {
        // ໃຊ້ຊື່ສິນຄ້າຕາມພາສາທີ່ເລືອກສຳລັບການຄົ້ນຫາ
        const productName = p.name[currentLang].toLowerCase();
        const matchSearch = productName.includes(searchTerm);
        const matchCategory = activeCategory === 'all' || p.category === activeCategory;
        return matchSearch && matchCategory;
    });

    const grid = document.getElementById('productsGrid');

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="text-align:center;padding:60px;color:#999;grid-column:1/-1">🔍 ${t('ບໍ່ພົບສິນຄ້າທີ່ຄົ້ນຫາ')}</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <img src="${p.image}" 
                 class="product-image" 
                 alt="${p.name[currentLang]}"
                 onerror="this.onerror=null;this.src='${getPlaceholderSrc(p.emoji)}'">
            <div class="product-info">
                <div class="product-name">${p.emoji} ${p.name[currentLang]}</div>
                <div class="product-price">${formatMoney(p.price)} ${t('ກີບ')}</div>
                <div class="product-category">${t('ລຸ້ນ')} ${p.version}</div>
                <button class="btn-add" data-id="${p.id}">➕ ${t('ເພີ່ມໃສ່ກະຕ່າ')}</button>
                <button class="btn-detail" data-id="${p.id}">📋 ${t('ເບິ່ງລາຍລະອຽດ')}</button>
            </div>
        </div>
    `).join('');

    // ຜູກ event ຜ່ານ event delegation ເພື່ອປະສິດທິພາບດີຂຶ້ນ
    grid.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
    });

    grid.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', () => showProductDetail(parseInt(btn.dataset.id)));
    });
}

// ========== Add to Cart ==========
// ຟັງຊັ້ນເພີ່ມສິນຄ້າເຂົ້າກະຕ່າ
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name[currentLang],  // ໃຊ້ຊື່ຕາມພາສາທີ່ເລືອກ
            price: product.price,
            emoji: product.emoji,
            quantity: 1
        });
    }
    updateCartBadge();
    showToast(`✅ ${product.emoji} ${product.name[currentLang]} ${t('ເພີ່ມໃສ່ກະຕ່າແລ້ວ')}`);
}

// ========== Show Product Detail Modal ==========
// ຟັງຊັ້ນສະແດງລາຍລະອຽດສິນຄ້າ (ຮອງຮັບການປ່ຽນພາສາ)
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById('productDetailModal');
    const body = document.getElementById('productDetailBody');
    document.getElementById('modalProductTitle').innerHTML = `<i class="fas fa-info-circle"></i> ${t('ລາຍລະອຽດສິນຄ້າ')}`;

    // ໃຊ້ລາຍລະອຽດຕາມພາສາທີ່ເລືອກ
    const detailText = product.detail[currentLang];
    const detailPoints = detailText.split('|').map(point => point.trim());

    body.innerHTML = `
        <div class="detail-body-inner">
            <div class="detail-img-wrap">
                <img src="${product.image}" 
                     class="product-detail-image"
                     alt="${product.name[currentLang]}"
                     onerror="this.onerror=null;this.src='${getPlaceholderSrc(product.emoji)}'">
            </div>
            <h2 class="detail-product-name">${product.name[currentLang]}</h2>
            <div class="detail-version-badge">${t('ລຸ້ນ')} ${product.version}</div>
            <div class="detail-price">${formatMoney(product.price)} ${t('ກີບ')}</div>
            <div class="detail-specs-box">
                <h4 class="detail-specs-title">
                    <i class="fas fa-microchip"></i> ${t('ສະເປັກສິນຄ້າ')}
                </h4>
                <ul class="detail-specs-list">
                    ${detailPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
            <button id="detailAddToCart" class="btn-add btn-detail-add-cart">
                🛒 ${t('ເພີ່ມໃສ່ກະຕ່າ')}
            </button>
        </div>
    `;

    modal.style.display = 'block';

    document.getElementById('detailAddToCart').addEventListener('click', () => {
        addToCart(product.id);
        modal.style.display = 'none';
    });
}

// ========== Render Cart Modal ==========
// ຟັງຊັ້ນສະແດງກະຕ່າ (ຮອງຮັບການປ່ຽນພາສາ)
function renderCartModal() {
    const subtotal  = getSubtotal();
    const shipping  = getShippingCost();
    const discount  = getDiscountAmount();
    const grandTotal = getGrandTotal();

    const cartItemsHtml = cart.map((item, idx) => `
        <div class="cart-item-modal">
            <div class="cart-item-info">
                <div><strong>${item.emoji} ${item.name}</strong></div>
                <div>${formatMoney(item.price)} ${t('ກີບ')}</div>
            </div>
            <div class="cart-item-actions">
                <button class="qty-btn" data-idx="${idx}" data-delta="-1">−</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" data-idx="${idx}" data-delta="1">+</button>
                <button class="btn-remove-modal" data-idx="${idx}">${t('ລຶບ')}</button>
            </div>
        </div>
    `).join('');

    const shippingOpts = [
        { key: 'hung-aloun', label: t('ຮຸ່ງອາລຸ່ນ'), cost: '20,000' },
        { key: 'anousith',   label: t('ອານຸສິດ'),   cost: '15,000' },
        { key: 'mixay',      label: t('ມີໄຊ'),      cost: '25,000' }
    ];

    const paymentOpts = [
        { key: 'qr',   label: `📱 ${t('ຊຳລະຜ່ານ QR')}` },
        { key: 'card', label: `💳 ${t('ບັດເຄຣດິດ/ເດບິດ')}` }
    ];

    const modalBody = document.getElementById('cartModalBody');
    modalBody.innerHTML = `
        <h3><i class="fas fa-list"></i> ${t('ລາຍການສິນຄ້າ')}</h3>
        <div class="cart-items-list">
            ${cart.length === 0
                ? `<div style="text-align:center;padding:40px">🛒 ${t('ຍັງບໍ່ມີສິນຄ້າ')}</div>`
                : cartItemsHtml}
        </div>

        ${cart.length > 0 ? `
            <h3 style="margin:15px 0 10px"><i class="fas fa-truck"></i> ${t('ບໍລິການຂົນສົ່ງ')}</h3>
            <div class="shipping-options">
                ${shippingOpts.map(opt => `
                    <div class="shipping-option ${selectedShipping === opt.key ? 'active' : ''}" data-ship="${opt.key}">
                        <input type="radio" name="shipping" value="${opt.key}" ${selectedShipping === opt.key ? 'checked' : ''}>
                        ${opt.label}
                    </div>
                `).join('')}
            </div>

            <h3 style="margin:15px 0 10px"><i class="fas fa-credit-card"></i> ${t('ຮູບແບບການຊຳລະ')}</h3>
            <div class="payment-options">
                ${paymentOpts.map(opt => `
                    <div class="payment-option ${selectedPayment === opt.key ? 'active' : ''}" data-pay="${opt.key}">
                        <input type="radio" name="payment" value="${opt.key}" ${selectedPayment === opt.key ? 'checked' : ''}>
                        ${opt.label}
                    </div>
                `).join('')}
            </div>

            ${selectedPayment === 'qr' ? `
            <div id="qrPaySection" style="text-align:center;margin:15px 0;padding:20px;background:#f8f9fa;border-radius:14px;border:2px solid #e0e0e0">
                <p style="font-weight:600;margin-bottom:12px;color:#333">📲 ${t('ສະແກນ QR ເພື່ອຊຳລະ')}</p>
                <img src="data:image/png;base64,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"
                     alt="LAO QR - VAYU SOUKVIRAI MR"
                     style="max-width:240px;width:100%;border-radius:12px;border:2px solid #ddd;display:block;margin:0 auto">
                <p style="font-size:0.8rem;color:#666;margin-top:10px">ສະແກນດ້ວຍ BCEL One, LDB Connect ຫຼື app ທະນາຄານ</p>
            </div>
            ` : ''}

            ${selectedPayment === 'card' ? `
            <div id="cardPaySection" style="margin:15px 0;padding:20px;background:#f0f4ff;border-radius:14px;border:2px solid #c5d0f5">
                <p style="font-weight:600;margin-bottom:14px;color:#333">💳 ${t('ປ້ອນຂໍ້ມູນບັດ')}</p>
                <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" maxlength="19"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/(.{4})/g,'$1 ').trim().substring(0,19)"
                    style="width:100%;padding:12px;border:2px solid #c5d0f5;border-radius:10px;font-size:1rem;font-family:'Noto Sans Lao',sans-serif;margin-bottom:10px;letter-spacing:2px">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
                    <input type="text" id="cardExpiry" placeholder="MM/YY" maxlength="5"
                        oninput="let v=this.value.replace(/[^0-9]/g,'');if(v.length>=3)v=v.substring(0,2)+'/'+v.substring(2);this.value=v"
                        style="padding:12px;border:2px solid #c5d0f5;border-radius:10px;font-size:1rem;font-family:'Noto Sans Lao',sans-serif">
                    <input type="text" id="cardCvv" placeholder="CVV" maxlength="3"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                        style="padding:12px;border:2px solid #c5d0f5;border-radius:10px;font-size:1rem;font-family:'Noto Sans Lao',sans-serif">
                </div>
                <input type="text" id="cardName" placeholder="${t('ຊື່ເທິງບັດ')}"
                    style="width:100%;padding:12px;border:2px solid #c5d0f5;border-radius:10px;font-size:1rem;font-family:'Noto Sans Lao',sans-serif;margin-top:10px;text-transform:uppercase">
                <p style="font-size:0.75rem;color:#888;margin-top:10px">🔒 ຂໍ້ມູນຖືກເຂົ້າລະຫັດຢ່າງປອດໄພ</p>
            </div>
            ` : ''}

            <div class="coupon-section">
                <h3><i class="fas fa-tag"></i> ${t('ລະຫັດສ່ວນຫຼຸດ')}</h3>
                <div class="coupon-input-group">
                    <input type="text" id="couponInput" placeholder="${t('ປ້ອນລະຫັດ (LAO2024)')}" 
                           value="${discountApplied ? COUPON_CODE : ''}">
                    <button id="applyCouponBtn" class="btn-coupon" ${discountApplied ? 'disabled' : ''}>
                        ${discountApplied ? `✅ ${t('ໃຊ້ແລ້ວ')}` : t('ໃຊ້ລະຫັດ')}
                    </button>
                </div>
                <p id="couponMsg" style="margin-top:8px;font-size:0.8rem;${discountApplied ? 'color:green' : ''}">
                    ${discountApplied ? `✅ ${t('ໄດ້ຮັບສ່ວນຫຼຸດ 5% ແລ້ວ!')}` : ''}
                </p>
            </div>

            <div class="summary-row"><span>${t('ຍອດລວມສິນຄ້າ')}:</span><span>${formatMoney(subtotal)} ${t('ກີບ')}</span></div>
            <div class="summary-row"><span>${t('ຄ່າຂົນສົ່ງ')}:</span><span>${formatMoney(shipping)} ${t('ກີບ')}</span></div>
            ${discountApplied
                ? `<div class="summary-row" style="color:#27ae60">
                       <span>${t('ສ່ວນຫຼຸດ')} ${DISCOUNT_RATE * 100}%:</span>
                       <span>-${formatMoney(discount)} ${t('ກີບ')}</span>
                   </div>`
                : ''}
            <div class="grand-total-row">
                <span>${t('ຍອດສຸດທ້າຍ')}:</span>
                <span>${formatMoney(grandTotal)} ${t('ກີບ')}</span>
            </div>
            <button id="checkoutFinalBtn" class="btn-checkout-final">✅ ${t('ຊຳລະເງິນ ແລະ ອອກໃບບິນ')}</button>
        ` : ''}
    `;

    if (cart.length === 0) return;

    // Quantity buttons
    modalBody.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx   = parseInt(btn.dataset.idx);
            const delta = parseInt(btn.dataset.delta);
            const newQty = cart[idx].quantity + delta;
            if (newQty <= 0) {
                cart.splice(idx, 1);
            } else {
                cart[idx].quantity = newQty;
            }
            updateCartBadge();
            renderCartModal();
        });
    });

    // Remove buttons
    modalBody.querySelectorAll('.btn-remove-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            cart.splice(parseInt(btn.dataset.idx), 1);
            updateCartBadge();
            renderCartModal();
        });
    });

    // Shipping options
    modalBody.querySelectorAll('.shipping-option').forEach(opt => {
        opt.addEventListener('click', () => {
            selectedShipping = opt.dataset.ship;
            renderCartModal();
        });
    });

    // Payment options
    modalBody.querySelectorAll('.payment-option').forEach(opt => {
        opt.addEventListener('click', () => {
            selectedPayment = opt.dataset.pay;
            renderCartModal();
        });
    });

    // Coupon
    const applyBtn = document.getElementById('applyCouponBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const code = document.getElementById('couponInput').value.trim().toUpperCase();
            const msgEl = document.getElementById('couponMsg');
            if (discountApplied) {
                msgEl.textContent = `⚠️ ${t('ໃຊ້ແລ້ວ')}`;
                msgEl.style.color = 'orange';
            } else if (code === COUPON_CODE) {
                discountApplied = true;
                renderCartModal();
            } else {
                msgEl.textContent = `❌ ${t('ລະຫັດສ່ວນຫຼຸດບໍ່ຖືກຕ້ອງ')}`;
                msgEl.style.color = 'red';
            }
        });
    }

    const checkoutBtn = document.getElementById('checkoutFinalBtn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
}

// ========== Checkout ==========
// ຟັງຊັ້ນຢືນຢັນການຊຳລະ ແລະ ສ້າງໃບບິນ
function checkout() {
    if (cart.length === 0) {
        showToast(`❌ ${t('ກະລຸນາເລືອກສິນຄ້າກ່ອນ')}`);
        return;
    }

    const required = ['name', 'phone', 'village', 'district', 'province'];
    if (required.some(f => !customerData[f])) {
        showToast(`⚠️ ${t('ກະລຸນາປ້ອນຂໍ້ມູນລູກຄ້າ')}`);
        return;
    }

    const shippingName = {
        'hung-aloun': t('ຮຸ່ງອາລຸ່ນ'),
        'anousith':   t('ອານຸສິດ'),
        'mixay':      t('ມີໄຊ')
    }[selectedShipping];

    const paymentName = selectedPayment === 'qr' ? t('ຊຳລະຜ່ານ QR') : t('ບັດເຄຣດິດ/ເດບິດ');

    const orderData = {
        customerName:  customerData.name,
        customerPhone: customerData.phone,
        customerEmail: customerData.email,
        address:       `${customerData.village}, ${customerData.district}, ${customerData.province}`,
        shippingMethod: shippingName,
        shippingCost:  getShippingCost(),
        cart: cart.map(item => ({
            emoji:    item.emoji,
            name:     item.name,
            quantity: item.quantity,
            price:    item.price
        })),
        subtotal:       getSubtotal(),
        discountApplied: discountApplied,
        discountAmount:  getDiscountAmount(),
        grandTotal:     getGrandTotal(),
        paymentMethod:  paymentName,
        orderDate:      new Date().toLocaleString(currentLang === 'lo' ? 'lo-LA' : 'en-US')
    };

    // ບັນທຶກຂໍ້ມູນຄຳສັ່ງ ແລະ ເປີດໃບບິນ
    localStorage.setItem('currentOrder', JSON.stringify(orderData));
    const receiptWindow = window.open('receipt.html', '_blank');
    if (!receiptWindow) {
        showToast('⚠️ ກະລຸນາອະນຸຍາດ popup ເພື່ອເປີດໃບບິນ');
    }

    // Reset state
    cart = [];
    discountApplied = false;
    updateCartBadge();
    document.getElementById('cartModal').style.display = 'none';
    showToast(`✅ ${t('ຊຳລະເງິນສຳເລັດ!')}`);
}

// ========== Language Switch Handler ==========
// ສ່ວນນີ້ເພີ່ມໃໝ່: ການຈັດການປຸ່ມເລືອກພາສາ
function initLanguageSwitch() {
    const langBtn = document.getElementById('langSwitchBtn');
    if (!langBtn) return;
    
    // ສ້າງ dropdown ເມນູສຳລັບເລືອກພາສາ
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    const menu = document.createElement('div');
    menu.className = 'lang-menu';
    menu.innerHTML = `
        <a href="#" data-lang="lo">🇱🇦 ພາສາລາວ</a>
        <a href="#" data-lang="en">🇬🇧 English</a>
    `;
    
    langBtn.parentNode.insertBefore(dropdown, langBtn);
    dropdown.appendChild(langBtn);
    dropdown.appendChild(menu);
    
    // ເປີດ/ປິດ dropdown ເມື່ອກົດປຸ່ມພາສາ
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });
    
    // ເມື່ອເລືອກພາສາໃດນຶ່ງ
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = link.dataset.lang;
            if (newLang === currentLang) {
                menu.classList.remove('show');
                return;
            }
            currentLang = newLang;
            localStorage.setItem('preferredLanguage', currentLang);  // ບັນທຶກພາສາທີ່ເລືອກ
            translatePage();  // ແປພາສາທັງໜ້າ
            menu.classList.remove('show');
            showToast(currentLang === 'lo' ? '🇱🇦 ປ່ຽນເປັນພາສາລາວແລ້ວ' : '🇬🇧 Switched to English');
        });
    });
    
    // ປິດ dropdown ເມື່ອກົດນອກ
    document.addEventListener('click', () => {
        menu.classList.remove('show');
    });
}

// ========== Event Listeners ==========
// ສ່ວນຜູກຟັງເຫດການຕ່າງໆ ເມື່ອໂຫຼດໜ້າເວັບສຳເລັດ
document.addEventListener('DOMContentLoaded', () => {
    // ດຶງພາສາທີ່ເຄີຍເລືອກໄວ້ຈາກ localStorage (ຖ້າມີ)
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en' || savedLang === 'lo') {
        currentLang = savedLang;
    }
    
    // ເລີ່ມຕົ້ນການປ່ຽນພາສາ
    initLanguageSwitch();
    
    // ແປພາສາໜ້າເວັບຕອນເລີ່ມຕົ້ນ
    translatePage();
    
    // ສະແດງສິນຄ້າ ແລະ ອັບເດດຕົວເລກກະຕ່າ
    displayProducts();
    updateCartBadge();

    // Search event
    document.getElementById('searchInput').addEventListener('input', displayProducts);

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProducts();
        });
    });

    // Cart modal - ເປີດ
    document.getElementById('cartIconBtn').addEventListener('click', () => {
        renderCartModal();
        document.getElementById('cartModal').style.display = 'block';
    });

    // User/customer modal - ເປີດ (pre-fill ຂໍ້ມູນເດີມ)
    document.getElementById('userIconBtn').addEventListener('click', () => {
        document.getElementById('customerName').value     = customerData.name;
        document.getElementById('customerPhone').value    = customerData.phone;
        document.getElementById('customerEmail').value    = customerData.email;
        document.getElementById('customerVillage').value  = customerData.village;
        document.getElementById('customerDistrict').value = customerData.district;
        document.getElementById('customerProvince').value = customerData.province;
        document.getElementById('userModal').style.display = 'block';
    });

    // Save customer data
    document.getElementById('saveCustomerBtn').addEventListener('click', () => {
        const data = {
            name:     document.getElementById('customerName').value.trim(),
            phone:    document.getElementById('customerPhone').value.trim(),
            email:    document.getElementById('customerEmail').value.trim(),
            village:  document.getElementById('customerVillage').value.trim(),
            district: document.getElementById('customerDistrict').value.trim(),
            province: document.getElementById('customerProvince').value.trim()
        };

        if (!data.name || !data.phone || !data.village || !data.district || !data.province) {
            showToast(`⚠️ ${t('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ')}`);
            return;
        }

        customerData = data;
        document.getElementById('userModal').style.display = 'none';
        showToast(`✅ ${t('ບັນທຶກຂໍ້ມູນລູກຄ້າແລ້ວ')}`);
    });

    // ປິດ modal: ທັງກົດປຸ່ມ × ແລະ ກົດຫຼັງ backdrop ໃນ handler ດຽວກັນ
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
            const modal = e.target.closest('.modal') || e.target;
            if (modal.classList.contains('modal')) modal.style.display = 'none';
        }
    });
});