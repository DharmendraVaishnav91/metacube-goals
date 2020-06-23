const { Parser } = require('json2csv');

const fields = [
    { label: 'Customer Name', value: 'name.value' },
    { label: 'VIN', value: 'vin.value' },
    { label: 'Year', value: 'year.value' },
    { label: 'Make', value: 'make.value' },
    { label: 'Model', value: 'model.value' },
    { label: 'Mileage', value: 'mileage.value' },
    { label: 'Cell Phone', value: 'phone.refToPhone.cell' },
    { label: 'Home Phone', value: 'phone.refToPhone.home' },
    { label: 'Work Phone', value: 'phone.refToPhone.work' },
    { label: 'Email', value: 'email.value' },
    { label: 'Prev Service', value: 'lastServiceDate.value' },
    { label: 'Comm Date', value: 'dateSent.value' },
    { label: 'Matched RO Date', value: 'matchedRoDate.value' },
    { label: 'Matched RO Value', value: 'roAmount.amount' }, // roAmount.amount used for CSV Export
    { label: 'Service Advisor', value: 'serviceAdvisorName.value' }
];

const myCars = [
    {
        "year": {
            "value": 2015
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6083100"
            },
            "value": "01/10/19",
            "timestamp": 1547164800,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "4b5c9c6177b48b7b55fc16208221fdfb-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "4b5c9c6177b48b7b55fc16208221fdfb-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550012",
                "cell": "--",
                "home": "7135550011"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550011"
        },
        "name": {
            "value": "Osprey1 Team1"
        },
        "vin": {
            "value": "5TDBKRFH5FS163348"
        },
        "model": {
            "value": "HIGHLANDER"
        },
        "dateSent": {
            "value": "12/16/19",
            "timestamp": 1576530015
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+1@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 19835
        }
    },
    {
        "year": {
            "value": 2015
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6086290"
            },
            "value": "01/20/19",
            "timestamp": 1548028800,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "57c11c6a647f28e0782e0bf123c8ec92-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "57c11c6a647f28e0782e0bf123c8ec92-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135551022",
                "cell": "--",
                "home": "7135551021"
            },
            "type": {
                "value": "home"
            },
            "value": "7135551021"
        },
        "name": {
            "value": "Osprey102 Team102"
        },
        "vin": {
            "value": "2T3DFREV0FW365436"
        },
        "model": {
            "value": "RAV4"
        },
        "dateSent": {
            "value": "12/26/19",
            "timestamp": 1577394312
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+102GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 19835
        }
    },
    {
        "year": {
            "value": 2015
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6223490"
            },
            "value": "03/11/19",
            "timestamp": 1552348800,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "fb95daaa475f5baedfa7230257ac5468-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "fb95daaa475f5baedfa7230257ac5468-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135551032",
                "cell": "--",
                "home": "7135551031"
            },
            "type": {
                "value": "home"
            },
            "value": "7135551031"
        },
        "name": {
            "value": "Osprey103 Team103"
        },
        "vin": {
            "value": "2T3DFREV2FW340473"
        },
        "model": {
            "value": "RAV4"
        },
        "dateSent": {
            "value": "12/11/19",
            "timestamp": 1576098348
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+103GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 62754
        }
    },
    {
        "year": {
            "value": 2015
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6087172"
            },
            "value": "08/17/19",
            "timestamp": 1566086400,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "8bd1d808b1c97b811adb3c0071081503-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "8bd1d808b1c97b811adb3c0071081503-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135551142",
                "cell": "--",
                "home": "7135551141"
            },
            "type": {
                "value": "home"
            },
            "value": "7135551141"
        },
        "name": {
            "value": "Osprey114 Team114"
        },
        "vin": {
            "value": "2T3RFREV4FW256662"
        },
        "model": {
            "value": "RAV4"
        },
        "dateSent": {
            "value": "12/29/19",
            "timestamp": 1577653520
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+114GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 17870
        }
    },
    {
        "year": {
            "value": 2016
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6087117"
            },
            "value": "08/17/19",
            "timestamp": 1566086400,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "18ba2cc92635561db9766df327599912-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "18ba2cc92635561db9766df327599912-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550182",
                "cell": "--",
                "home": "7135550181"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550181"
        },
        "name": {
            "value": "Osprey18 Team18"
        },
        "vin": {
            "value": "5TDJKRFH2GS326129"
        },
        "model": {
            "value": "HIGHLANDER"
        },
        "dateSent": {
            "value": "12/19/19",
            "timestamp": 1576789267
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+18@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 18570
        }
    },
    {
        "year": {
            "value": 2015
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "9087117"
            },
            "value": "08/17/19",
            "timestamp": 1566086400,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "38a04576ed90c8b859ce629650ccd96b-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "38a04576ed90c8b859ce629650ccd96b-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550184",
                "cell": "--",
                "home": "7135550183"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550183"
        },
        "name": {
            "value": "Osprey18RAV4 Team18RAV4"
        },
        "vin": {
            "value": "JTMZFREV0FD042796"
        },
        "model": {
            "value": "RAV4"
        },
        "dateSent": {
            "value": "12/19/19",
            "timestamp": 1576789267
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+18RAV4@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 18570
        }
    },
    {
        "year": {
            "value": 2016
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6086568"
            },
            "value": "08/12/19",
            "timestamp": 1565654400,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "71df951571bf2cd2c7169a56b9772493-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "71df951571bf2cd2c7169a56b9772493-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550302",
                "cell": "--",
                "home": "7135550301"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550301"
        },
        "name": {
            "value": "Osprey30 Team30"
        },
        "vin": {
            "value": "3TMCZ5AN1GM008724"
        },
        "model": {
            "value": "TACOMA"
        },
        "dateSent": {
            "value": "12/24/19",
            "timestamp": 1577221223
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+30@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 28640
        }
    },
    {
        "year": {
            "value": 2017
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6084669"
            },
            "value": "03/18/19",
            "timestamp": 1552953600,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "6d49374bc8c1dfa4e494dee5cb2a071c-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "6d49374bc8c1dfa4e494dee5cb2a071c-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550372",
                "cell": "--",
                "home": "7135550371"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550371"
        },
        "name": {
            "value": "Osprey37 Team37"
        },
        "vin": {
            "value": "JF1ZNAA17H8703071"
        },
        "model": {
            "value": "86"
        },
        "dateSent": {
            "value": "12/21/19",
            "timestamp": 1576962032
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+37@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 58761
        }
    },
    {
        "year": {
            "value": 2015
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "9087428"
            },
            "value": "06/26/19",
            "timestamp": 1561593600,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "6d484028cd9bde93d8f54c62c7d8d308-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "6d484028cd9bde93d8f54c62c7d8d308-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550484",
                "cell": "--",
                "home": "7135550483"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550483"
        },
        "name": {
            "value": "Osprey48RAV4 Team48RAV4"
        },
        "vin": {
            "value": "JTMZFREV9FD042831"
        },
        "model": {
            "value": "RAV4"
        },
        "dateSent": {
            "value": "12/23/19",
            "timestamp": 1577134869
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+48RAV4@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 13950
        }
    },
    {
        "year": {
            "value": 2015
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "9088427"
            },
            "value": "06/29/19",
            "timestamp": 1561852800,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "043ea7a29ca1e7078bfcec363b78b6c6-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "043ea7a29ca1e7078bfcec363b78b6c6-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550514",
                "cell": "--",
                "home": "7135550513"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550513"
        },
        "name": {
            "value": "Osprey51RAV4 Team51RAV4"
        },
        "vin": {
            "value": "JTMRFREV4FD096456"
        },
        "model": {
            "value": "RAV4"
        },
        "dateSent": {
            "value": "12/23/19",
            "timestamp": 1577134869
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+51RAV4@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 18950
        }
    },
    {
        "year": {
            "value": 2010
        },
        "lastServiceDate": {
            "roNumber": {
                "value": "6085679"
            },
            "value": "04/25/19",
            "timestamp": 1556236800,
            "index": "osprey-consumers-logical-zone-00004",
            "consumerStoreId": "acc9a425a57f1ce407a90de2308e77c3-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
            "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
        },
        "roAmount": {
            "amount": "--",
            "refToMatchedRepairOrder": {
                "roNumber": [],
                "index": "osprey-consumers-logical-zone-00004",
                "consumerStoreId": "acc9a425a57f1ce407a90de2308e77c3-0dec1ac9472e11e8a3bf12aa047e7152-TMNA",
                "routing": "0dec1ac9472e11e8a3bf12aa047e7152"
            },
            "value": 0
        },
        "matchedRoDate": {
            "value": "--",
            "timestamp": 0
        },
        "matchedRoCount": {
            "value": 0
        },
        "processedRO": [],
        "phone": {
            "refToPhone": {
                "work": "7135550082",
                "cell": "--",
                "home": "7135550081"
            },
            "type": {
                "value": "home"
            },
            "value": "7135550081"
        },
        "name": {
            "value": "Osprey8 Team8"
        },
        "vin": {
            "value": "1NXBU4EE1AZ205583"
        },
        "model": {
            "value": "COROLLA"
        },
        "dateSent": {
            "value": "12/11/19",
            "timestamp": 1576098021
        },
        "make": {
            "value": "TOYOTA"
        },
        "email": {
            "value": "GSM.OSPREY+8@GMAIL.COM"
        },
        "serviceAdvisorName": {
            "value": ""
        },
        "mileage": {
            "value": 63440
        }
    }
]
const opts = {"flatten-separator": "_", fields};

try {
    const parser = new Parser(opts);
    const csv = parser.parse(myCars);
    console.log(csv);
} catch (err) {
    console.error(err);
}