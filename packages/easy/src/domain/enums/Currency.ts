import { Enum } from '../../types';
import { money, Money } from '../structs';

export class Currency extends Enum {
  constructor(id: string, name: string, readonly digits: number, code: string) {
    super(id, name, code);
  }
  static readonly EUR = new Currency('EUR', 'Euro', 2, '€');
  static readonly USD = new Currency('USD', 'US Dollar', 2, '$');
  static readonly AED = new Currency('AED', 'United Arab Emirates Dirham', 2, 'AED');
  static readonly AFN = new Currency('AFN', 'Afghan Afghani', 0, 'Af');
  static readonly ALL = new Currency('ALL', 'Albanian Lek', 0, 'ALL');
  static readonly AMD = new Currency('AMD', 'Armenian Dram', 0, 'AMD');
  static readonly ARS = new Currency('ARS', 'Argentine Peso', 2, 'AR$');
  static readonly AUD = new Currency('AUD', 'Australian Dollar', 2, 'AU$');
  static readonly AZN = new Currency('AZN', 'Azerbaijani Manat', 2, 'man.');
  static readonly BAM = new Currency('BAM', 'Bosnia-Herzegovina Convertible Mark', 2, 'KM');
  static readonly BDT = new Currency('BDT', 'Bangladeshi Taka', 2, 'Tk');
  static readonly BGN = new Currency('BGN', 'Bulgarian Lev', 2, 'BGN');
  static readonly BHD = new Currency('BHD', 'Bahraini Dinar', 3, 'BD');
  static readonly BIF = new Currency('BIF', 'Burundian Franc', 0, 'FBu');
  static readonly BND = new Currency('BND', 'Brunei Dollar', 2, 'BN$');
  static readonly BOB = new Currency('BOB', 'Bolivian Boliviano', 2, 'Bs');
  static readonly BRL = new Currency('BRL', 'Brazilian Real', 2, 'R$');
  static readonly BWP = new Currency('BWP', 'Botswanan Pula', 2, 'BWP');
  static readonly BYN = new Currency('BYN', 'Belarusian Ruble', 2, 'Br');
  static readonly BZD = new Currency('BZD', 'Belize Dollar', 2, 'BZ$');
  static readonly CAD = new Currency('CAD', 'Canadian Dollar', 2, 'CA$');
  static readonly CDF = new Currency('CDF', 'Congolese Franc', 2, 'CDF');
  static readonly CHF = new Currency('CHF', 'Swiss Franc', 2, 'CHF');
  static readonly CLP = new Currency('CLP', 'Chilean Peso', 0, 'CL$');
  static readonly CNY = new Currency('CNY', 'Chinese Yuan', 2, 'CN¥');
  static readonly COP = new Currency('COP', 'Colombian Peso', 0, 'CO$');
  static readonly CRC = new Currency('CRC', 'Costa Rican Colón', 0, '₡');
  static readonly CVE = new Currency('CVE', 'Cape Verdean Escudo', 2, 'CV$');
  static readonly CZK = new Currency('CZK', 'Czech Republic Koruna', 2, 'Kč');
  static readonly DJF = new Currency('DJF', 'Djiboutian Franc', 0, 'Fdj');
  static readonly DKK = new Currency('DKK', 'Danish Krone', 2, 'Dkr');
  static readonly DOP = new Currency('DOP', 'Dominican Peso', 2, 'RD$');
  static readonly DZD = new Currency('DZD', 'Algerian Dinar', 2, 'DA');
  static readonly EEK = new Currency('EEK', 'Estonian Kroon', 2, 'Ekr');
  static readonly EGP = new Currency('EGP', 'Egyptian Pound', 2, 'EGP');
  static readonly ERN = new Currency('ERN', 'Eritrean Nakfa', 2, 'Nfk');
  static readonly ETB = new Currency('ETB', 'Ethiopian Birr', 2, 'Br');
  static readonly GBP = new Currency('GBP', 'British Pound Sterling', 2, '£');
  static readonly GEL = new Currency('GEL', 'Georgian Lari', 2, 'GEL');
  static readonly GHS = new Currency('GHS', 'Ghanaian Cedi', 2, 'GH₵');
  static readonly GNF = new Currency('GNF', 'Guinean Franc', 0, 'FG');
  static readonly GTQ = new Currency('GTQ', 'Guatemalan Quetzal', 2, 'GTQ');
  static readonly HKD = new Currency('HKD', 'Hong Kong Dollar', 2, 'HK$');
  static readonly HNL = new Currency('HNL', 'Honduran Lempira', 2, 'HNL');
  static readonly HRK = new Currency('HRK', 'Croatian Kuna', 2, 'kn');
  static readonly HUF = new Currency('HUF', 'Hungarian Forint', 0, 'Ft');
  static readonly IDR = new Currency('IDR', 'Indonesian Rupiah', 0, 'Rp');
  static readonly ILS = new Currency('ILS', 'Israeli New Sheqel', 2, '₪');
  static readonly INR = new Currency('INR', 'Indian Rupee', 2, 'Rs');
  static readonly IQD = new Currency('IQD', 'Iraqi Dinar', 0, 'IQD');
  static readonly IRR = new Currency('IRR', 'Iranian Rial', 0, 'IRR');
  static readonly ISK = new Currency('ISK', 'Icelandic Króna', 0, 'Ikr');
  static readonly JMD = new Currency('JMD', 'Jamaican Dollar', 2, 'J$');
  static readonly JOD = new Currency('JOD', 'Jordanian Dinar', 3, 'JD');
  static readonly JPY = new Currency('JPY', 'Japanese Yen', 0, '¥');
  static readonly KES = new Currency('KES', 'Kenyan Shilling', 2, 'Ksh');
  static readonly KHR = new Currency('KHR', 'Cambodian Riel', 2, 'KHR');
  static readonly KMF = new Currency('KMF', 'Comorian Franc', 0, 'CF');
  static readonly KRW = new Currency('KRW', 'South Korean Won', 0, '₩');
  static readonly KWD = new Currency('KWD', 'Kuwaiti Dinar', 3, 'KD');
  static readonly KZT = new Currency('KZT', 'Kazakhstani Tenge', 2, 'KZT');
  static readonly LBP = new Currency('LBP', 'Lebanese Pound', 0, 'L.L.');
  static readonly LKR = new Currency('LKR', 'Sri Lankan Rupee', 2, 'SLRs');
  static readonly LTL = new Currency('LTL', 'Lithuanian Litas', 2, 'Lt');
  static readonly LVL = new Currency('LVL', 'Latvian Lats', 2, 'Ls');
  static readonly LYD = new Currency('LYD', 'Libyan Dinar', 3, 'LD');
  static readonly MAD = new Currency('MAD', 'Moroccan Dirham', 2, 'MAD');
  static readonly MDL = new Currency('MDL', 'Moldovan Leu', 2, 'MDL');
  static readonly MGA = new Currency('MGA', 'Malagasy Ariary', 0, 'MGA');
  static readonly MKD = new Currency('MKD', 'Macedonian Denar', 2, 'MKD');
  static readonly MMK = new Currency('MMK', 'Myanma Kyat', 0, 'MMK');
  static readonly MOP = new Currency('MOP', 'Macanese Pataca', 2, 'MOP$');
  static readonly MUR = new Currency('MUR', 'Mauritian Rupee', 0, 'MURs');
  static readonly MXN = new Currency('MXN', 'Mexican Peso', 2, 'MX$');
  static readonly MYR = new Currency('MYR', 'Malaysian Ringgit', 2, 'RM');
  static readonly MZN = new Currency('MZN', 'Mozambican Metical', 2, 'MTn');
  static readonly NAD = new Currency('NAD', 'Namibian Dollar', 2, 'N$');
  static readonly NGN = new Currency('NGN', 'Nigerian Naira', 2, '₦');
  static readonly NIO = new Currency('NIO', 'Nicaraguan Córdoba', 2, 'C$');
  static readonly NOK = new Currency('NOK', 'Norwegian Krone', 2, 'Nkr');
  static readonly NPR = new Currency('NPR', 'Nepalese Rupee', 2, 'NPRs');
  static readonly NZD = new Currency('NZD', 'New Zealand Dollar', 2, 'NZ$');
  static readonly OMR = new Currency('OMR', 'Omani Rial', 3, 'OMR');
  static readonly PAB = new Currency('PAB', 'Panamanian Balboa', 2, 'B/.');
  static readonly PEN = new Currency('PEN', 'Peruvian Nuevo Sol', 2, 'S/.');
  static readonly PHP = new Currency('PHP', 'Philippine Peso', 2, '₱');
  static readonly PKR = new Currency('PKR', 'Pakistani Rupee', 0, 'PKRs');
  static readonly PLN = new Currency('PLN', 'Polish Zloty', 2, 'zł');
  static readonly PYG = new Currency('PYG', 'Paraguayan Guarani', 0, '₲');
  static readonly QAR = new Currency('QAR', 'Qatari Rial', 2, 'QR');
  static readonly RON = new Currency('RON', 'Romanian Leu', 2, 'RON');
  static readonly RSD = new Currency('RSD', 'Serbian Dinar', 0, 'din.');
  static readonly RUB = new Currency('RUB', 'Russian Ruble', 2, 'RUB');
  static readonly RWF = new Currency('RWF', 'Rwandan Franc', 0, 'RWF');
  static readonly SAR = new Currency('SAR', 'Saudi Riyal', 2, 'SR');
  static readonly SDG = new Currency('SDG', 'Sudanese Pound', 2, 'SDG');
  static readonly SEK = new Currency('SEK', 'Swedish Krona', 2, 'Skr');
  static readonly SGD = new Currency('SGD', 'Singapore Dollar', 2, 'S$');
  static readonly SOS = new Currency('SOS', 'Somali Shilling', 0, 'Ssh');
  static readonly SYP = new Currency('SYP', 'Syrian Pound', 0, 'SY£');
  static readonly THB = new Currency('THB', 'Thai Baht', 2, '฿');
  static readonly TND = new Currency('TND', 'Tunisian Dinar', 3, 'DT');
  static readonly TOP = new Currency('TOP', 'Tongan Paʻanga', 2, 'T$');
  static readonly TRY = new Currency('TRY', 'Turkish Lira', 2, 'TL');
  static readonly TTD = new Currency('TTD', 'Trinidad and Tobago Dollar', 2, 'TT$');
  static readonly TWD = new Currency('TWD', 'New Taiwan Dollar', 2, 'NT$');
  static readonly TZS = new Currency('TZS', 'Tanzanian Shilling', 0, 'TSh');
  static readonly UAH = new Currency('UAH', 'Ukrainian Hryvnia', 2, '₴');
  static readonly UGX = new Currency('UGX', 'Ugandan Shilling', 0, 'USh');
  static readonly UYU = new Currency('UYU', 'Uruguayan Peso', 2, '$U');
  static readonly UZS = new Currency('UZS', 'Uzbekistan Som', 0, 'UZS');
  static readonly VEF = new Currency('VEF', 'Venezuelan Bolívar', 2, 'Bs.F.');
  static readonly VND = new Currency('VND', 'Vietnamese Dong', 0, '₫');
  static readonly XAF = new Currency('XAF', 'CFA Franc BEAC', 0, 'FCFA');
  static readonly XOF = new Currency('XOF', 'CFA Franc BCEAO', 0, 'CFA');
  static readonly YER = new Currency('YER', 'Yemeni Rial', 0, 'YR');
  static readonly ZAR = new Currency('ZAR', 'South African Rand', 2, 'R');
  static readonly ZMK = new Currency('ZMK', 'Zambian Kwacha', 0, 'ZK');
  static readonly ZWL = new Currency('ZWL', 'Zimbabwean Dollar', 0, 'ZWL$');

  amount = (amount = 0): Money => money(this, amount);
}