import DrivingEvent from "../types/drivingEvent";
import DrivingInstruction from "../types/drivingInstruction";

// recommendation: "Get out! Otherwise you end up like strawberries... in a jam!",
const drivingInstructions: DrivingInstruction[] = [
  { latitude: 47.212353, longitude: 7.526938 },
  { latitude: 47.212293, longitude: 7.526956 },
  { latitude: 47.212247, longitude: 7.52699 },
  { latitude: 47.21217, longitude: 7.526914 },
  { latitude: 47.21209, longitude: 7.526877 },
  { latitude: 47.211997, longitude: 7.526844 },
  { latitude: 47.211904, longitude: 7.526811 },
  { latitude: 47.211805, longitude: 7.526775 },
  { latitude: 47.211702, longitude: 7.526736 },
  { latitude: 47.2116, longitude: 7.526698 },
  { latitude: 47.211477, longitude: 7.526656 },
  { latitude: 47.211385, longitude: 7.526605 },
  { latitude: 47.211302, longitude: 7.526564 },
  { latitude: 47.211235, longitude: 7.526529 },
  { latitude: 47.211166, longitude: 7.526483 },
  { latitude: 47.211105, longitude: 7.526454 },
  { latitude: 47.211061, longitude: 7.526418 },
  { latitude: 47.211031, longitude: 7.526399 },
  { latitude: 47.210997, longitude: 7.526367 },
  { latitude: 47.210959, longitude: 7.526312 },
  { latitude: 47.210927, longitude: 7.526253 },
  { latitude: 47.210882, longitude: 7.526213 },
  { latitude: 47.210823, longitude: 7.526196 },
  { latitude: 47.210754, longitude: 7.526213 },
  { latitude: 47.210684, longitude: 7.526222 },
  { latitude: 47.21062, longitude: 7.526216 },
  { latitude: 47.210544, longitude: 7.526209 },
  { latitude: 47.210467, longitude: 7.526145 },
  { latitude: 47.210385, longitude: 7.526082 },
  { latitude: 47.210302, longitude: 7.526012 },
  { latitude: 47.210222, longitude: 7.525921 },
  { latitude: 47.210149, longitude: 7.525811 },
  { latitude: 47.210086, longitude: 7.525709 },
  { latitude: 47.210031, longitude: 7.525598 },
  { latitude: 47.209988, longitude: 7.525495 },
  { latitude: 47.209961, longitude: 7.525411 },
  { latitude: 47.209928, longitude: 7.525332 },
  { latitude: 47.209877, longitude: 7.525277 },
  { latitude: 47.209857, longitude: 7.525248 },
  { latitude: 47.20984, longitude: 7.52522 },
  { latitude: 47.20982, longitude: 7.525198 },
  { latitude: 47.209789, longitude: 7.52516 },
  { latitude: 47.209746, longitude: 7.525108 },
  { latitude: 47.20969, longitude: 7.52506 },
  {
    latitude: 47.209615,
    longitude: 7.525015,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.209528,
    longitude: 7.524964,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.209437,
    longitude: 7.524926,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.209335,
    longitude: 7.524903,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.209216,
    longitude: 7.524899,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.209106,
    longitude: 7.524914,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.208989,
    longitude: 7.524929,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.208867,
    longitude: 7.524946,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.208763,
    longitude: 7.524982,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20865,
    longitude: 7.525003,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.208534,
    longitude: 7.525026,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.208418,
    longitude: 7.525046,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.208303,
    longitude: 7.525068,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.208188,
    longitude: 7.52509,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.207739,
    longitude: 7.525119,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.207613,
    longitude: 7.525111,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20749,
    longitude: 7.52515,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.207366,
    longitude: 7.525166,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.207241,
    longitude: 7.52518,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.207115,
    longitude: 7.52517,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.206991,
    longitude: 7.525185,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.206867,
    longitude: 7.525224,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.206743,
    longitude: 7.525238,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.206619,
    longitude: 7.525254,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.206494,
    longitude: 7.525271,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20637,
    longitude: 7.525291,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.206246,
    longitude: 7.525311,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.205365,
    longitude: 7.525417,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20523,
    longitude: 7.52545,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.205203,
    longitude: 7.525541,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.205088,
    longitude: 7.525562,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.204988,
    longitude: 7.525618,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.204869,
    longitude: 7.525637,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20477,
    longitude: 7.525671,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.204648,
    longitude: 7.525716,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.204536,
    longitude: 7.52576,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20441,
    longitude: 7.525824,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.204284,
    longitude: 7.525854,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.204176,
    longitude: 7.525898,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.204057,
    longitude: 7.525908,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203947,
    longitude: 7.52596,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203838,
    longitude: 7.526017,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203725,
    longitude: 7.526083,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203608,
    longitude: 7.526156,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203488,
    longitude: 7.52623,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203361,
    longitude: 7.526316,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203228,
    longitude: 7.526407,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.203093,
    longitude: 7.526499,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.202955,
    longitude: 7.526591,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.202815,
    longitude: 7.526689,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.202671,
    longitude: 7.526785,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20253,
    longitude: 7.52689,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.202378,
    longitude: 7.527001,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.202231,
    longitude: 7.527111,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.202093,
    longitude: 7.527227,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.201953,
    longitude: 7.527349,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.201817,
    longitude: 7.527461,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.201687,
    longitude: 7.527577,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.201558,
    longitude: 7.527703,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.201434,
    longitude: 7.527819,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.20131,
    longitude: 7.52796,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.201189,
    longitude: 7.528082,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.201062,
    longitude: 7.528205,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200936,
    longitude: 7.528336,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200813,
    longitude: 7.528465,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200689,
    longitude: 7.528605,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200562,
    longitude: 7.528745,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200437,
    longitude: 7.528884,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200319,
    longitude: 7.529026,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200195,
    longitude: 7.529171,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.200073,
    longitude: 7.529308,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.199946,
    longitude: 7.529447,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.199826,
    longitude: 7.529579,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.199701,
    longitude: 7.529704,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.199572,
    longitude: 7.52984,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.199445,
    longitude: 7.529963,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.19932,
    longitude: 7.530082,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.199193,
    longitude: 7.53019,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.199079,
    longitude: 7.530294,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198967,
    longitude: 7.530373,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198865,
    longitude: 7.53046,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198769,
    longitude: 7.530523,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198686,
    longitude: 7.530573,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198618,
    longitude: 7.530621,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198569,
    longitude: 7.530658,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198528,
    longitude: 7.530676,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198508,
    longitude: 7.530694,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198489,
    longitude: 7.530706,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198479,
    longitude: 7.530708,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198455,
    longitude: 7.530718,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198416,
    longitude: 7.530737,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198365,
    longitude: 7.530764,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198298,
    longitude: 7.530796,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198223,
    longitude: 7.530832,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198129,
    longitude: 7.530873,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.198026,
    longitude: 7.530923,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.19791,
    longitude: 7.530976,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.197785,
    longitude: 7.531039,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.197656,
    longitude: 7.531114,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.197516,
    longitude: 7.531189,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.197375,
    longitude: 7.531262,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.19723,
    longitude: 7.531339,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.197078,
    longitude: 7.531423,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.196934,
    longitude: 7.531492,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.196786,
    longitude: 7.531563,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.196639,
    longitude: 7.531634,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.196484,
    longitude: 7.531704,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.196335,
    longitude: 7.531782,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.196195,
    longitude: 7.531893,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.196063,
    longitude: 7.531983,
    instruction: DrivingEvent.TakeABreak,
    recommendation:
      "If you don't take a break now, you end up like strawberries... in a jam!",
  },
  {
    latitude: 47.195953,
    longitude: 7.532075,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195825,
    longitude: 7.532191,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195697,
    longitude: 7.532315,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195576,
    longitude: 7.532448,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195462,
    longitude: 7.532595,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195351,
    longitude: 7.532757,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195241,
    longitude: 7.532935,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195141,
    longitude: 7.533129,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.19505,
    longitude: 7.533336,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194971,
    longitude: 7.533552,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.1949,
    longitude: 7.533776,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194845,
    longitude: 7.534013,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194799,
    longitude: 7.53426,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194767,
    longitude: 7.534517,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194751,
    longitude: 7.534786,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194747,
    longitude: 7.535061,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194749,
    longitude: 7.53534,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194754,
    longitude: 7.535627,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194769,
    longitude: 7.535914,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194778,
    longitude: 7.536201,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194771,
    longitude: 7.536489,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194784,
    longitude: 7.536794,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194786,
    longitude: 7.537084,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.19479,
    longitude: 7.537374,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194798,
    longitude: 7.537667,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.19481,
    longitude: 7.537959,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194833,
    longitude: 7.538247,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194858,
    longitude: 7.538533,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.19488,
    longitude: 7.538825,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194902,
    longitude: 7.53912,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194928,
    longitude: 7.539423,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.194957,
    longitude: 7.539736,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.19499,
    longitude: 7.540053,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195023,
    longitude: 7.540366,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195057,
    longitude: 7.540673,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195096,
    longitude: 7.540973,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195129,
    longitude: 7.541273,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195163,
    longitude: 7.541569,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195201,
    longitude: 7.541868,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195241,
    longitude: 7.54217,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195279,
    longitude: 7.542482,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195316,
    longitude: 7.542797,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195352,
    longitude: 7.543119,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195387,
    longitude: 7.543436,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195416,
    longitude: 7.543759,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195441,
    longitude: 7.544081,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195458,
    longitude: 7.54441,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195472,
    longitude: 7.544736,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.19548,
    longitude: 7.545055,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195485,
    longitude: 7.54537,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195483,
    longitude: 7.545678,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195475,
    longitude: 7.545987,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195465,
    longitude: 7.546294,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195455,
    longitude: 7.546601,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195442,
    longitude: 7.546912,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195425,
    longitude: 7.547219,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195403,
    longitude: 7.54753,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195384,
    longitude: 7.547842,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195362,
    longitude: 7.548169,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195338,
    longitude: 7.548503,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195268,
    longitude: 7.549681,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195252,
    longitude: 7.550014,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.19524,
    longitude: 7.550346,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195231,
    longitude: 7.550679,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195227,
    longitude: 7.551012,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195229,
    longitude: 7.551345,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195238,
    longitude: 7.551677,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195252,
    longitude: 7.552008,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195269,
    longitude: 7.552342,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.195288,
    longitude: 7.552673,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.199583,
    longitude: 7.564281,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.199583,
    longitude: 7.564281,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.199758,
    longitude: 7.564585,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.199938,
    longitude: 7.56482,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.200144,
    longitude: 7.565116,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.200319,
    longitude: 7.565397,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.200497,
    longitude: 7.5657,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.200672,
    longitude: 7.565999,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.200839,
    longitude: 7.566267,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.201019,
    longitude: 7.566569,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.201193,
    longitude: 7.566863,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.20137,
    longitude: 7.567165,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.201549,
    longitude: 7.567463,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.201725,
    longitude: 7.567763,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.201904,
    longitude: 7.568068,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.202084,
    longitude: 7.568368,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.202267,
    longitude: 7.568662,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.202453,
    longitude: 7.568953,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.202648,
    longitude: 7.569235,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.202837,
    longitude: 7.569516,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.203026,
    longitude: 7.5698,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.203214,
    longitude: 7.570091,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.203397,
    longitude: 7.57038,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.203578,
    longitude: 7.570667,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.203762,
    longitude: 7.570957,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.203946,
    longitude: 7.571248,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.204131,
    longitude: 7.571544,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.204316,
    longitude: 7.571834,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.204501,
    longitude: 7.572123,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.204683,
    longitude: 7.572417,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.204862,
    longitude: 7.572713,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.205042,
    longitude: 7.573003,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.205217,
    longitude: 7.573298,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.205393,
    longitude: 7.5736,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.205568,
    longitude: 7.573905,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.205738,
    longitude: 7.574206,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.205901,
    longitude: 7.574494,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.206056,
    longitude: 7.574779,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.206205,
    longitude: 7.575061,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.206349,
    longitude: 7.575345,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.20649,
    longitude: 7.575625,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.20663,
    longitude: 7.575909,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.206768,
    longitude: 7.576191,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.2069,
    longitude: 7.576473,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207026,
    longitude: 7.576762,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207151,
    longitude: 7.577052,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207276,
    longitude: 7.577342,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207396,
    longitude: 7.577636,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207515,
    longitude: 7.57793,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207632,
    longitude: 7.578225,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207744,
    longitude: 7.578527,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207854,
    longitude: 7.57883,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.207961,
    longitude: 7.579133,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208064,
    longitude: 7.579442,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208164,
    longitude: 7.57975,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208264,
    longitude: 7.580063,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208362,
    longitude: 7.580378,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208457,
    longitude: 7.580701,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.20855,
    longitude: 7.581022,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208639,
    longitude: 7.581345,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208724,
    longitude: 7.581675,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208809,
    longitude: 7.582005,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208886,
    longitude: 7.582326,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
  {
    latitude: 47.208959,
    longitude: 7.582631,
    instruction: DrivingEvent.AlternativeRoute,
    recommendation:
      "Get off the highway at the next exit! You can enjoy a nice scenery while avoiding traffic!",
  },
];

export default drivingInstructions;
