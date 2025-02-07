// list of country codes used for currency conversion in the dropdown options
const country_data = {
    "United Arab Emirates (AE)": ["AE", "AED"],
    "Afghanistan (AF)": ["AF", "AFN"],
    "Antigua and Barbuda (AG)": ["AG", "XCD"],
    "Albania (AL)": ["AL", "ALL"],

    "Armenia (AM)": ["AM", "AMD"],
    "Netherlands Antilles (AN)": ["AN", "ANG"],
    "Angola (AO)": ["AO", "AOA"],
    "Antarctica (AQ)": ["AQ", "AQD"],

    "Argentina (AR)": ["AR", "ARS"],
    "Australia (AU)": ["AU", "AUD"],
    "Azerbaijan (AZ)": ["AZ", "AZN"],
    "Bosnia and Herzegovina (BA)": ["BA", "BAM"],

    "Barbados (BB)": ["BB", "BBD"],
    "Bangladesh (BD)": ["BD", "BDT"],
    "Belgium (BE)": ["BE", "XOF"],
    "Bulgaria (BG)": ["BG", "BGN"],

    "Bahrain (BH)": ["BH", "BHD"],
    "Burundi (BI)": ["BI", "BIF"],
    "Bermuda (BM)": ["BM", "BMD"],
    "Brunei Darussalam (BN)": ["BN", "BND"],

    "Bolivia (BO)": ["BO", "BOB"],
    "Brazil (BR)": ["BR", "BRL"],
    "Bahamas (BS)": ["BS", "BSD"],
    "Bouvet Island (BV)": ["BV", "NOK"],

    "Botswana (BW)": ["BW", "BWP"],
    "Belarus (BY)": ["BY", "BYR"],
    "Belize (BZ)": ["BZ", "BZD"],
    "Canada (CA)": ["CA", "CAD"],

    "Congo (CD)": ["CD", "CDF"],
    "Central African Republic (CF)": ["CF", "XAF"],
    "Switzerland (CH)": ["CH", "CHF"],
    "Chile (CL)": ["CL", "CLP"],

    "China (CN)": ["CN", "CNY"],
    "Colombia (CO)": ["CO", "COP"],
    "Costa Rica (CR)": ["CR", "CRC"],
    "Cuba (CU)": ["CU", "CUP"],

    "Cape Verde (CV)": ["CV", "CVE"],
    "Cyprus (CY)": ["CY", "CYP"],
    "Czech Republic (CZ)": ["CZ", "CZK"],
    "Djibouti (DJ)": ["DJ", "DJF"],

    "Denmark (DK)": ["DK", "DKK"],
    "Dominican Republic (DO)": ["DO", "DOP"],
    "Algeria (DZ)": ["DZ", "DZD"],
    "Ecuador (EC)": ["EC", "ECS"],

    "Estonia (EE)": ["EE", "EEK"],
    "Egypt (EG)": ["EG", "EGP"],
    "Ethiopia (ET)": ["ET", "ETB"],
    "France (FR)": ["FR", "EUR"],

    "Fiji (FJ)": ["FJ", "FJD"],
    "Falkland Islands (FK)": ["FK", "FKP"],
    "United Kingdom (GB)": ["GB", "GBP"],
    "Georgia (GE)": ["GE", "GEL"],

    "Guernsey (GG)": ["GG", "GGP"],
    "Ghana (GH)": ["GH", "GHS"],
    "Gibraltar (GI)": ["GI", "GIP"],
    "Gambia (GM)": ["GM", "GMD"],

    "Guinea (GN)": ["GN", "GNF"],
    "Guatemala (GT)": ["GT", "GTQ"],
    "Guyana (GY)": ["GY", "GYD"],
    "Hong Kong (HK)": ["HK", "HKD"],

    "Honduras (HN)": ["HN", "HNL"],
    "Croatia (HR)": ["HR", "HRK"],
    "Haiti (HT)": ["HT", "HTG"],
    "Hungary (HU)": ["HU", "HUF"],

    "Indonesia (ID)": ["ID", "IDR"],
    "Israel (IL)": ["IL", "ILS"],
    "India (IN)": ["IN", "INR"],
    "Iraq (IQ)": ["IQ", "IQD"],

    "Iran (IR)": ["IR", "IRR"],
    "Iceland (IS)": ["IS", "ISK"],
    "Jamaica (JM)": ["JM", "JMD"],
    "Jordan (JO)": ["JO", "JOD"],

    "Japan (JP)": ["JP", "JPY"],
    "Kenya (KE)": ["KE", "KES"],
    "Kyrgyzstan (KG)": ["KG", "KGS"],
    "Cambodia (KH)": ["KH", "KHR"],

    "Comoros (KM)": ["KM", "KMF"],
    "North Korea (KP)": ["KP", "KPW"],
    "South Korea (KR)": ["KR", "KRW"],
    "Kuwait (KW)": ["KW", "KWD"],

    "Cayman Islands (KY)": ["KY", "KYD"],
    "Kazakhstan (KZ)": ["KZ", "KZT"],
    "Laos (LA)": ["LA", "LAK"],
    "Lebanon (LB)": ["LB", "LBP"],

    "Sri Lanka (LK)": ["LK", "LKR"],
    "Liberia (LR)": ["LR", "LRD"],
    "Lesotho (LS)": ["LS", "LSL"],
    "Lithuania (LT)": ["LT", "LTL"],

    "Latvia (LV)": ["LV", "LVL"],
    "Libya (LY)": ["LY", "LYD"],
    "Morocco (MA)": ["MA", "MAD"],
    "Moldova (MD)": ["MD", "MDL"],

    "Madagascar (MG)": ["MG", "MGA"],
    "North Macedonia (MK)": ["MK", "MKD"],
    "Myanmar (MM)": ["MM", "MMK"],
    "Mongolia (MN)": ["MN", "MNT"],

    "Macau (MO)": ["MO", "MOP"],
    "Mauritania (MR)": ["MR", "MRO"],
    "Malta (MT)": ["MT", "MTL"],
    "Mauritius (MU)": ["MU", "MUR"],

    "Maldives (MV)": ["MV", "MVR"],
    "Malawi (MW)": ["MW", "MWK"],
    "Mexico (MX)": ["MX", "MXN"],
    "Malaysia (MY)": ["MY", "MYR"],

    "Mozambique (MZ)": ["MZ", "MZN"],
    "Namibia (NA)": ["NA", "NAD"],
    "New Caledonia (NC)": ["NC", "XPF"],
    "Nigeria (NG)": ["NG", "NGN"],

    "Nicaragua (NI)": ["NI", "NIO"],
    "Nepal (NP)": ["NP", "NPR"],
    "New Zealand (NZ)": ["NZ", "NZD"],
    "Oman (OM)": ["OM", "OMR"],

    "Panama (PA)": ["PA", "PAB"],
    "Peru (PE)": ["PE", "PEN"],
    "Papua New Guinea (PG)": ["PG", "PGK"],
    "Philippines (PH)": ["PH", "PHP"],

    "Pakistan (PK)": ["PK", "PKR"],
    "Poland (PL)": ["PL", "PLN"],
    "Paraguay (PY)": ["PY", "PYG"],
    "Qatar (QA)": ["QA", "QAR"],

    "Romania (RO)": ["RO", "RON"],
    "Serbia (RS)": ["RS", "RSD"],
    "Russia (RU)": ["RU", "RUB"],
    "Rwanda (RW)": ["RW", "RWF"],

    "Saudi Arabia (SA)": ["SA", "SAR"],
    "Solomon Islands (SB)": ["SB", "SBD"],
    "Seychelles (SC)": ["SC", "SCR"],
    "Sudan (SD)": ["SD", "SDG"],

    "Sweden (SE)": ["SE", "SEK"],
    "Singapore (SG)": ["SG", "SGD"],
    "Slovakia (SK)": ["SK", "SKK"],
    "Sierra Leone (SL)": ["SL", "SLL"],

    "Somalia (SO)": ["SO", "SOS"],
    "Suriname (SR)": ["SR", "SRD"],
    "Sao Tome and Principe (ST)": ["ST", "STD"],
    "El Salvador (SV)": ["SV", "SVC"],

    "Syria (SY)": ["SY", "SYP"],
    "Eswatini (SZ)": ["SZ", "SZL"],
    "Thailand (TH)": ["TH", "THB"],
    "Tajikistan (TJ)": ["TJ", "TJS"],

    "Turkmenistan (TM)": ["TM", "TMT"],
    "Tunisia (TN)": ["TN", "TND"],
    "Tonga (TO)": ["TO", "TOP"],
    "Turkey (TR)": ["TR", "TRY"],

    "Trinidad and Tobago (TT)": ["TT", "TTD"],
    "Taiwan (TW)": ["TW", "TWD"],
    "Tanzania (TZ)": ["TZ", "TZS"],
    "Ukraine (UA)": ["UA", "UAH"],

    "Uganda (UG)": ["UG", "UGX"],
    "United States (US)": ["US", "USD"],
    "Uruguay (UY)": ["UY", "UYU"],
    "Uzbekistan (UZ)": ["UZ", "UZS"],

    "Venezuela (VE)": ["VE", "VEF"],
    "Vietnam (VN)": ["VN", "VND"],
    "Vanuatu (VU)": ["VU", "VUV"],
    "Yemen (YE)": ["YE", "YER"],

    "South Africa (ZA)": ["ZA", "ZAR"],
    "Zambia (ZM)": ["ZM", "ZMK"],
    "Zimbabwe (ZW)": ["ZW", "ZWD"]
}