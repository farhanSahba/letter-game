/* 
 * لعبة الحروف العربية - بواسطة فرحان صحبا
 * تم تطويرها لغاية تعليمية للغة العربية
 *
 * - لاستخدام الأصوات، قم بإنشاء مجلد 'assets' داخل مجلد المشروع
 * - قم بتحميل الملفات الصوتية التالية ووضعها في مجلد assets:
 *   - click.mp3: صوت النقر على الأزرار
 *   - reveal.mp3: صوت كشف الإجابة
 *   - timeout.mp3: صوت انتهاء الوقت
 *   - success.mp3: صوت الإجابة الصحيحة
 *   - fail.mp3: صوت الإجابة الخاطئة
 *   - start.mp3: صوت بداية اللعبة
 *   - win.mp3: صوت انتهاء اللعبة
 *
 * - يمكن تحميل هذه الأصوات من مواقع مجانية مثل:
 *   - https://mixkit.co/free-sound-effects/
 *   - https://freesound.org/
 *   - https://www.zapsplat.com/
 */

// 1. قائمة الحروف (أ-ي)
const letters = [
  'أ','ب','ت','ث','ج','ح','خ',
  'د','ذ','ر','ز','س','ش','ص',
  'ض','ط','ظ','ع','غ','ف','ق',
  'ك','ل','م','ن','ه','و','ي'
];

// 2. الأسئلة والأجوبة لكل حرف (7 أسئلة لكل حرف)
const questions = {
  'أ': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الألف؟', a: 'أسد' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الألف؟', a: 'أفوكادو' },
    { q: 'ما اسم مدينة سعودية تبدأ بحرف الألف؟', a: 'أبها' },
    { q: 'ما لون يبدأ بحرف الألف؟', a: 'أصفر' },
    { q: 'ما نبات يبدأ بحرف الألف؟', a: 'أرز' },
    { q: 'ما وسيلة نقل تبدأ بحرف الألف؟', a: 'أتوبيس' },
    { q: 'ما مهنة تبدأ بحرف الألف؟', a: 'أستاذ' }
  ],
  'ب': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الباء؟', a: 'بقرة' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الباء؟', a: 'برتقال' },
    { q: 'ما اسم مدينة سعودية تبدأ بحرف الباء؟', a: 'بريدة' },
    { q: 'ما لون يبدأ بحرف الباء؟', a: 'بنفسجي' },
    { q: 'ما نبات يبدأ بحرف الباء؟', a: 'بابونج' },
    { q: 'ما وسيلة نقل تبدأ بحرف الباء؟', a: 'باص' },
    { q: 'ما مهنة تبدأ بحرف الباء؟', a: 'بائع' }
  ],
  'ت': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف التاء؟', a: 'تمساح' },
    { q: 'ما فاكهة يبدأ اسمها بحرف التاء؟', a: 'تين' },
    { q: 'ما مدينة سعودية تبدأ بحرف التاء؟', a: 'تبوك' },
    { q: 'ما لون يبدأ بحرف التاء؟', a: 'تركواز' },
    { q: 'ما نبات يبدأ بحرف التاء؟', a: 'توت' },
    { q: 'ما وسيلة نقل تبدأ بحرف التاء؟', a: 'تريلا' },
    { q: 'ما مهنة تبدأ بحرف التاء؟', a: 'طبيب' }
  ],
  'ث': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الثاء؟', a: 'ثعلب' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الثاء؟', a: 'ثمر الهندي' },
    { q: 'ما مدينة سعودية تبدأ بحرف الثاء؟', a: 'ثادق' },
    { q: 'ما لون يبدأ بحرف الثاء؟', a: 'ثامبيم' },
    { q: 'ما نبات يبدأ بحرف الثاء؟', a: 'ثوم' },
    { q: 'ما وسيلة نقل تبدأ بحرف الثاء؟', a: 'ثلاجة' },
    { q: 'ما مهنة تبدأ بحرف الثاء؟', a: 'ثري مدير' }
  ],
  'ج': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الجيم؟', a: 'جمل' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الجيم؟', a: 'جوافة' },
    { q: 'ما مدينة سعودية تبدأ بحرف الجيم؟', a: 'جدة' },
    { q: 'ما لون يبدأ بحرف الجيم؟', a: 'جملي' },
    { q: 'ما نبات يبدأ بحرف الجيم؟', a: 'جزر' },
    { q: 'ما وسيلة نقل تبدأ بحرف الجيم؟', a: 'جرار' },
    { q: 'ما مهنة تبدأ بحرف الجيم؟', a: 'جراح' }
  ],
  'ح': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الحاء؟', a: 'حصان' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الحاء؟', a: 'حبحب' },
    { q: 'ما مدينة سعودية تبدأ بحرف الحاء؟', a: 'حائل' },
    { q: 'ما لون يبدأ بحرف الحاء؟', a: 'أحمر' },
    { q: 'ما نبات يبدأ بحرف الحاء؟', a: 'حسك' },
    { q: 'ما وسيلة نقل تبدأ بحرف الحاء؟', a: 'حافلة' },
    { q: 'ما مهنة تبدأ بحرف الحاء؟', a: 'حلاق' }
  ],
  'خ': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الخاء؟', a: 'خروف' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الخاء؟', a: 'خوخ' },
    { q: 'ما مدينة سعودية تبدأ بحرف الخاء؟', a: 'خميس مشيط' },
    { q: 'ما لون يبدأ بحرف الخاء؟', a: 'خمري' },
    { q: 'ما نبات يبدأ بحرف الخاء؟', a: 'ختمية' },
    { q: 'ما وسيلة نقل تبدأ بحرف الخاء؟', a: 'خنزير طائر (مجاز)' },
    { q: 'ما مهنة تبدأ بحرف الخاء؟', a: 'خياط' }
  ],
  'د': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الدال؟', a: 'ديك' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الدال؟', a: 'دراق' },
    { q: 'ما مدينة سعودية تبدأ بحرف الدال؟', a: 'الدمام' },
    { q: 'ما لون يبدأ بحرف الدال؟', a: 'ذهبي' },
    { q: 'ما نبات يبدأ بحرف الدال؟', a: 'دردار' },
    { q: 'ما وسيلة نقل تبدأ بحرف الدال؟', a: 'دراجة' },
    { q: 'ما مهنة تبدأ بحرف الدال؟', a: 'مُدَّرس' }
  ],
  'ذ': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الذال؟', a: 'ذئب' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الذال؟', a: 'ذرة' },
    { q: 'ما مدينة سعودية تبدأ بحرف الذال؟', a: 'ذي القرى' },
    { q: 'ما لون يبدأ بحرف الذال؟', a: 'ذهبي' },
    { q: 'ما نبات يبدأ بحرف الذال؟', a: 'ذيل الثعلب' },
    { q: 'ما وسيلة نقل تبدأ بحرف الذال؟', a: 'ذوّابة (شاحنة)' },
    { q: 'ما مهنة تبدأ بحرف الذال؟', a: 'ضابط' }
  ],
  'ر': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الراء؟', a: 'رنة' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الراء؟', a: 'رمان' },
    { q: 'ما مدينة سعودية تبدأ بحرف الراء؟', a: 'الرياض' },
    { q: 'ما لون يبدأ بحرف الراء؟', a: 'رمادي' },
    { q: 'ما نبات يبدأ بحرف الراء؟', a: 'ريحان' },
    { q: 'ما وسيلة نقل تبدأ بحرف الراء؟', a: 'ربع نقل' },
    { q: 'ما مهنة تبدأ بحرف الراء؟', a: 'رسام' }
  ],
  'ز': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الزاي؟', a: 'زرافة' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الزاي؟', a: 'زبيب' },
    { q: 'ما مدينة سعودية تبدأ بحرف الزاي؟', a: 'الزلفي' },
    { q: 'ما لون يبدأ بحرف الزاي؟', a: 'زمردي' },
    { q: 'ما نبات يبدأ بحرف الزاي؟', a: 'زيتون' },
    { q: 'ما وسيلة نقل تبدأ بحرف الزاي؟', a: 'زورق' },
    { q: 'ما مهنة تبدأ بحرف الزاي؟', a: 'زارع' }
  ],
  'س': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف السين؟', a: 'سمك' },
    { q: 'ما فاكهة يبدأ اسمها بحرف السين؟', a: 'سفرجل' },
    { q: 'ما مدينة سعودية تبدأ بحرف السين؟', a: 'سكاكا' },
    { q: 'ما لون يبدأ بحرف السين؟', a: 'سماوي' },
    { q: 'ما نبات يبدأ بحرف السين؟', a: 'سوسن' },
    { q: 'ما وسيلة نقل تبدأ بحرف السين؟', a: 'سيارة' },
    { q: 'ما مهنة تبدأ بحرف السين؟', a: 'سائق' }
  ],
  'ش': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الشين؟', a: 'شبل' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الشين؟', a: 'شمام' },
    { q: 'ما مدينة سعودية تبدأ بحرف الشين؟', a: 'شرورة' },
    { q: 'ما لون يبدأ بحرف الشين؟', a: 'شفاف' },
    { q: 'ما نبات يبدأ بحرف الشين؟', a: 'شاي' },
    { q: 'ما وسيلة نقل تبدأ بحرف الشين؟', a: 'شاحنة' },
    { q: 'ما مهنة تبدأ بحرف الشين؟', a: 'شرطي' }
  ],
  'ص': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الصاد؟', a: 'صقر' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الصاد؟', a: 'صبار' },
    { q: 'ما مدينة سعودية تبدأ بحرف الصاد؟', a: 'صامطة' },
    { q: 'ما لون يبدأ بحرف الصاد؟', a: 'صدئي' },
    { q: 'ما نبات يبدأ بحرف الصاد؟', a: 'صبار' },
    { q: 'ما وسيلة نقل تبدأ بحرف الصاد؟', a: 'صهريج' },
    { q: 'ما مهنة تبدأ بحرف الصاد؟', a: 'صيدلي' }
  ],
  'ض': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الضاد؟', a: 'ضب' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الضاد؟', a: 'ضفاير' },
    { q: 'ما مدينة سعودية تبدأ بحرف الضاد؟', a: 'الضالع' },
    { q: 'ما لون يبدأ بحرف الضاد؟', a: 'ضبابي' },
    { q: 'ما نبات يبدأ بحرف الضاد؟', a: 'ضتر' },
    { q: 'ما وسيلة نقل تبدأ بحرف الضاد؟', a: 'شاحنة بضائع' },
    { q: 'ما مهنة تبدأ بحرف الضاد؟', a: 'ضابط' }
  ],
  'ط': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الطاء؟', a: 'طاووس' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الطاء؟', a: 'طماطم' },
    { q: 'ما مدينة سعودية تبدأ بحرف الطاء؟', a: 'الطائف' },
    { q: 'ما لون يبدأ بحرف الطاء؟', a: 'طعمي' },
    { q: 'ما نبات يبدأ بحرف الطاء؟', a: 'طماطم' },
    { q: 'ما وسيلة نقل تبدأ بحرف الطاء؟', a: 'طائرة' },
    { q: 'ما مهنة تبدأ بحرف الطاء؟', a: 'طبيب' }
  ],
  'ظ': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الظاء؟', a: 'ظبي' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الظاء؟', a: 'ظافر' },
    { q: 'ما مدينة تبدأ بحرف الظاء؟', a: 'ظفار' },
    { q: 'ما لون يبدأ بحرف الظاء؟', a: 'ظلالي' },
    { q: 'ما نبات يبدأ بحرف الظاء؟', a: 'ظواض' },
    { q: 'ما وسيلة نقل تبدأ بحرف الظاء؟', a: 'ظرف بري' },
    { q: 'ما مهنة تبدأ بحرف الظاء؟', a: 'ظابط' }
  ],
  'ع': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف العين؟', a: 'عصفور' },
    { q: 'ما فاكهة يبدأ اسمها بحرف العين؟', a: 'عنب' },
    { q: 'ما مدينة سعودية تبدأ بحرف العين؟', a: 'عنيزة' },
    { q: 'ما لون يبدأ بحرف العين؟', a: 'عنابي' },
    { q: 'ما نبات يبدأ بحرف العين؟', a: 'عسلة' },
    { q: 'ما وسيلة نقل تبدأ بحرف العين؟', a: 'عربة' },
    { q: 'ما مهنة تبدأ بحرف العين؟', a: 'عالم' }
  ],
  'غ': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الغين؟', a: 'غزال' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الغين؟', a: 'غريف' },
    { q: 'ما مدينة تبدأ بحرف الغين؟', a: 'غدامس' },
    { q: 'ما لون يبدأ بحرف الغين؟', a: 'غمائي' },
    { q: 'ما نبات يبدأ بحرف الغين؟', a: 'غار' },
    { q: 'ما وسيلة نقل تبدأ بحرف الغين؟', a: 'غواصة' },
    { q: 'ما مهنة تبدأ بحرف الغين؟', a: 'غرافيك ديزاينر' }
  ],
  'ف': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الفاء؟', a: 'فيل' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الفاء؟', a: 'فراولة' },
    { q: 'ما مدينة سعودية تبدأ بحرف الفاء؟', a: 'المدينة المنورة' },
    { q: 'ما لون يبدأ بحرف الفاء؟', a: 'فوشي' },
    { q: 'ما نبات يبدأ بحرف الفاء؟', a: 'فول سوداني' },
    { q: 'ما وسيلة نقل تبدأ بحرف الفاء؟', a: 'فيري' },
    { q: 'ما مهنة تبدأ بحرف الفاء؟', a: 'فنان' }
  ],
  'ق': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف القاف؟', a: 'قرد' },
    { q: 'ما فاكهة يبدأ اسمها بحرف القاف؟', a: 'قشطة' },
    { q: 'ما مدينة سعودية تبدأ بحرف القاف؟', a: 'القنفذة' },
    { q: 'ما لون يبدأ بحرف القاف؟', a: 'قرمزي' },
    { q: 'ما نبات يبدأ بحرف القاف؟', a: 'قراص' },
    { q: 'ما وسيلة نقل تبدأ بحرف القاف؟', a: 'قطار' },
    { q: 'ما مهنة تبدأ بحرف القاف؟', a: 'قاضٍ' }
  ],
  'ك': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الكاف؟', a: 'كركدن' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الكاف؟', a: 'كيوي' },
    { q: 'ما مدينة سعودية تبدأ بحرف الكاف؟', a: 'كرك' },
    { q: 'ما لون يبدأ بحرف الكاف؟', a: 'كحلي' },
    { q: 'ما نبات يبدأ بحرف الكاف؟', a: 'كزبرة' },
    { q: 'ما وسيلة نقل تبدأ بحرف الكاف؟', a: 'كبينة (مجاز)' },
    { q: 'ما مهنة تبدأ بحرف الكاف؟', a: 'كيميائي' }
  ],
  'ل': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف اللام؟', a: 'لبون' },
    { q: 'ما فاكهة يبدأ اسمها بحرف اللام؟', a: 'ليمون' },
    { q: 'ما مدينة سعودية تبدأ بحرف اللام؟', a: 'ليلى' },
    { q: 'ما لون يبدأ بحرف اللام؟', a: 'ليلكي' },
    { q: 'ما نبات يبدأ بحرف اللام؟', a: 'لبلاب' },
    { q: 'ما وسيلة نقل تبدأ بحرف اللام؟', a: 'ليموزين' },
    { q: 'ما مهنة تبدأ بحرف اللام؟', a: 'لبّان (مدير لبن)' }
  ],
  'م': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الميم؟', a: 'ماعز' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الميم؟', a: 'مشمش' },
    { q: 'ما مدينة سعودية تبدأ بحرف الميم؟', a: 'مكة' },
    { q: 'ما لون يبدأ بحرف الميم؟', a: 'مائیوني (لون)' },
    { q: 'ما نبات يبدأ بحرف الميم؟', a: 'موز' },
    { q: 'ما وسيلة نقل تبدأ بحرف الميم؟', a: 'مترو' },
    { q: 'ما مهنة تبدأ بحرف الميم؟', a: 'مهندس' }
  ],
  'ن': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف النون؟', a: 'نمر' },
    { q: 'ما فاكهة يبدأ اسمها بحرف النون؟', a: 'نبق' },
    { q: 'ما مدينة سعودية تبدأ بحرف النون؟', a: 'نجران' },
    { q: 'ما لون يبدأ بحرف النون؟', a: 'نيلي' },
    { q: 'ما نبات يبدأ بحرف النون؟', a: 'نعناع' },
    { q: 'ما وسيلة نقل تبدأ بحرف النون؟', a: 'ناطحة سحاب (مجاز)' },
    { q: 'ما مهنة تبدأ بحرف النون؟', a: 'نحات' }
  ],
  'ه': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الهاء؟', a: 'هدهد' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الهاء؟', a: 'هندباء' },
    { q: 'ما مدينة سعودية تبدأ بحرف الهاء؟', a: 'هجرة' },
    { q: 'ما لون يبدأ بحرف الهاء؟', a: 'هندبي (لون)' },
    { q: 'ما نبات يبدأ بحرف الهاء؟', a: 'هليون' },
    { q: 'ما وسيلة نقل تبدأ بحرف الهاء؟', a: 'هليكوبتر' },
    { q: 'ما مهنة تبدأ بحرف الهاء؟', a: 'هندسي معمار' }
  ],
  'و': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الواو؟', a: 'وزغ' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الواو؟', a: 'ورد العسل' },
    { q: 'ما مدينة سعودية تبدأ بحرف الواو؟', a: 'وادي الدواسر' },
    { q: 'ما لون يبدأ بحرف الواو؟', a: 'وردي' },
    { q: 'ما نبات يبدأ بحرف الواو؟', a: 'وزنطراط' },
    { q: 'ما وسيلة نقل تبدأ بحرف الواو؟', a: 'واترباص' },
    { q: 'ما مهنة تبدأ بحرف الواو؟', a: 'وكيل' }
  ],
  'ي': [
    { q: 'ما الحيوان الذي يبدأ اسمه بحرف الياء؟', a: 'يمامة' },
    { q: 'ما فاكهة يبدأ اسمها بحرف الياء؟', a: 'ينسون' },
    { q: 'ما مدينة سعودية تبدأ بحرف الياء؟', a: 'ينبع' },
    { q: 'ما لون يبدأ بحرف الياء؟', a: 'يامني (لون)' },
    { q: 'ما نبات يبدأ بحرف الياء؟', a: 'يالنجان' },
    { q: 'ما وسيلة نقل تبدأ بحرف الياء؟', a: 'ياماجا (موتوسيكل)' },
    { q: 'ما مهنة تبدأ بحرف الياء؟', a: 'يَتيم (حارس أيتام)' }
  ]
};

// عناصر DOM الرئيسية
let welcomeBanner;
let rulesModal;
let gameModal;
let overlay;
let gameResults;

// أزرار التحكم
let btnPlayNav;
let btnPlayBig;
let btnRules;
let btnStart;
let btnPlayAgain;
let closeBtns;
let revealBtn;
let undoBtn;

// منطقة السؤال والإجابة
let qArea;
let qText;
let trueBtn;
let falseBtn;
let aText;
let encourageText;

// المؤقتات
let timerEl;
let qTimerEl;

// الشبكة السداسية
let hexGrid;

// النقاط
let redScoreEl;
let greenScoreEl;
let redResultEl;
let greenResultEl;
let winnerNameEl;

// المتغيرات الرئيسية
let gameActive = false;
let questionDuration = 60; // المدة الافتراضية للسؤال بالثواني
let gameDuration = 180; // المدة الافتراضية للعبة بالثواني
let mainTime = 0;
let questionTime = 0;
let currentLetter = '';
let currentCell = null;
let answered = new Set();
let scores = { red: 0, green: 0 };
let mainInterval = null;
let questionInterval = null;

// متغيرات تتبع آخر حركة للتراجع
let lastMove = {
  letter: '',        // آخر حرف تم اختياره
  cell: null,        // آخر خلية تم اختيارها
  team: '',          // الفريق الذي قام بالإجابة
  wasCorrect: false, // هل كانت الإجابة صحيحة
  score: 0           // النقاط التي تم إضافتها
};
let canUndo = false; // هل يمكن التراجع عن آخر حركة

// متغيرات الصوت
let audioContext;
let sndClick, sndReveal, sndTimeout, sndSuccess, sndFail, sndStart, sndWin;

// إنشاء الأصوات باستخدام Web Audio API
function initAudio() {
  try {
    // إنشاء السياق الصوتي
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    
    // محاولة تحميل ملفات الصوت من مجلد assets
    // إذا لم تتوفر الملفات، يتم إنشاء أصوات بديلة
    sndClick = createSound('click', () => playTone('click'));
    sndReveal = createSound('reveal', () => playTone('reveal'));
    sndTimeout = createSound('timeout', () => playTone('timeout'));
    sndSuccess = createSound('success', () => playTone('success'));
    sndFail = createSound('fail', () => playTone('fail'));
    sndStart = createSound('start', () => playTone('start'));
    sndWin = createSound('win', () => playTone('win'));
    
  } catch (error) {
    console.error('حدث خطأ في تهيئة الصوت:', error);
  }
}

// إنشاء كائن صوت مع بديل احتياطي
function createSound(name, fallbackFn) {
  const sound = new Audio(`./assets/${name}.mp3`);
  sound.onerror = fallbackFn;
  return {
    play: function() {
      if (sound.error) {
        fallbackFn();
      } else {
        sound.currentTime = 0;
        sound.play();
      }
    }
  };
}

// تشغيل نغمة بديلة باستخدام Web Audio API
function playTone(type) {
  if (!audioContext) {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
    } catch (e) {
      console.error('غير قادر على إنشاء سياق صوتي', e);
      return;
    }
  }
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // تهيئة المؤثرات الصوتية بناءً على نوع الصوت
  switch (type) {
    case 'click':
      oscillator.type = 'sine';
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
      break;
      
    case 'reveal':
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(900, audioContext.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.4);
      break;
      
    case 'timeout':
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
      break;
      
    case 'success':
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(700, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(1200, audioContext.currentTime + 0.15);
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.4);
      
      // إضافة صوت ثاني للنجاح
      setTimeout(() => {
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1100, audioContext.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(1400, audioContext.currentTime + 0.2);
        gain2.gain.setValueAtTime(0.15, audioContext.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        osc2.start();
        osc2.stop(audioContext.currentTime + 0.3);
      }, 150);
      break;
      
    case 'fail':
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(350, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(180, audioContext.currentTime + 0.4);
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.4);
      
      // إضافة صوت ثاني للفشل
      setTimeout(() => {
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(250, audioContext.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(120, audioContext.currentTime + 0.3);
        gain2.gain.setValueAtTime(0.15, audioContext.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        osc2.start();
        osc2.stop(audioContext.currentTime + 0.3);
      }, 200);
      break;
      
    case 'start':
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3);
      
      // إضافة صوتين إضافيين لبداية اللعبة
      setTimeout(() => {
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(600, audioContext.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.2);
        gain2.gain.setValueAtTime(0.2, audioContext.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        osc2.start();
        osc2.stop(audioContext.currentTime + 0.2);
      }, 300);
      
      setTimeout(() => {
        const osc3 = audioContext.createOscillator();
        const gain3 = audioContext.createGain();
        osc3.connect(gain3);
        gain3.connect(audioContext.destination);
        osc3.type = 'triangle';
        osc3.frequency.setValueAtTime(800, audioContext.currentTime);
        osc3.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.3);
        gain3.gain.setValueAtTime(0.2, audioContext.currentTime);
        gain3.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        osc3.start();
        osc3.stop(audioContext.currentTime + 0.3);
      }, 500);
      break;
      
    case 'win':
      // لحن مفرح للفوز (سلم موسيقي صاعد)
      playNote(523.25, 0, 0.3); // C5
      playNote(659.25, 0.3, 0.3); // E5
      playNote(783.99, 0.6, 0.3); // G5
      playNote(1046.50, 0.9, 0.5); // C6
      break;
      
    default:
      oscillator.type = 'sine';
      oscillator.frequency.value = 440;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
  }
}

// دالة مساعدة لتشغيل نغمة موسيقية محددة
function playNote(frequency, delay, duration) {
  setTimeout(() => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.type = 'sine';
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.2, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    osc.start();
    osc.stop(audioContext.currentTime + duration);
  }, delay * 1000);
}

// عبارات تشجيعية للإجابة الصحيحة
const successPhrases = [
  'أحسنت! أنت ذكي جداً ✨', 
  'رائع! لقد عرفتها بسرعة 🚀', 
  'ممتاز! أنت نجم اللعبة 🌟', 
  'عمل مذهل! هكذا يصنع الأبطال 🥇', 
  'واصل التقدم! أنت عبقري 👏',
  'لا يُصدق! إجابة رائعة 😃',
  'أنت تتفوق على نفسك! 💪',
  'أنت ملك الحروف 👑'
];

// عبارات تشجيعية للإجابة الخاطئة
const failPhrases = [
  'حاول مرة أخرى! أنت تستطيع فعلها ❤️', 
  'لا بأس! الجميع يخطئ 😊', 
  'المرة القادمة ستكون أفضل! 💡', 
  'استمر في المحاولة! النجاح قريب 🙊', 
  'لا تستسلم! أنت أقوى مما تتخيل 💪',
  'لم تصب هذه المرة! لكن القادم أجمل 🌈',
  'خطأ صغير! لازلت في المقدمة 😉',
  'حظ أوفر في المرة القادمة! 🍀'
];

// إعدادات اللعبة حسب مستوى الصعوبة
const difficultySettings = {
  easy: {
    questionTime: 60,
    gameTime: 180
  },
  medium: {
    questionTime: 45,
    gameTime: 180
  },
  hard: {
    questionTime: 30,
    gameTime: 180
  }
};

// تهيئة التطبيق
function initApp() {

  // Initialize DOM elements
  welcomeBanner = document.querySelector('.welcome-banner');
  rulesModal = document.querySelector('.rules-modal');
  gameModal = document.querySelector('.game-modal');
  overlay = document.querySelector('.overlay');
  gameResults = document.getElementById('game-results');
  btnPlayNav = document.querySelector('.btn-play');
  btnRules = document.getElementById('rulesBtn');
  btnStart = document.getElementById('startBtn');
  let btnHome = document.getElementById('homeBtn'); // Define home button

  // Initialize DOM elements
  const gameResultsDiv = document.getElementById('game-results');
  if (gameResultsDiv) {
    btnPlayAgain = gameResultsDiv.querySelector('#playAgainBtn');
  } else {
    console.error("ERROR: game-results div not found, cannot find btnPlayAgain.");
    btnPlayAgain = null; 
  }
  if (!btnPlayAgain) { 
      btnPlayAgain = document.getElementById('playAgainBtn'); 
      if(!btnPlayAgain) console.error("CRITICAL: btnPlayAgain is null even after fallback getElementById!");
  }

  closeBtns = document.querySelectorAll('.close-btn');
  revealBtn = document.getElementById('revealBtn');
  if (!revealBtn) {
      // This was a critical check, but if revealBtn is consistently found, this can be removed or kept for safety.
      // console.error("CRITICAL: revealBtn is null right after initial getElementById!");
  }
  undoBtn = document.getElementById('undoBtn');
  qArea = document.getElementById('question-area');
  qText = document.getElementById('question-text');
  trueBtn = document.getElementById('trueBtn');
  falseBtn = document.getElementById('falseBtn');
  aText = document.getElementById('answer-text');
  encourageText = document.querySelector('.encourage');
  timerEl = document.getElementById('timer');
  qTimerEl = document.getElementById('question-timer');
  hexGrid = document.getElementById('hexGrid');
  redScoreEl = document.getElementById('red-score');
  greenScoreEl = document.getElementById('green-score');
  redResultEl = document.querySelector('.team-result.red .result-score');
  greenResultEl = document.querySelector('.team-result.green .result-score');
  winnerNameEl = document.getElementById('winner-name');

  // Verify critical buttons after initial assignment phase
  // Warning for btnStart will be removed as it should now be found.
  if (!undoBtn) console.error("CRITICAL: undoBtn is null after assignment in initApp!"); // Keep check for undoBtn

  // تهيئة المؤثرات الصوتية
  initAudio();
  
  // تعطيل زر التراجع في البداية
  canUndo = false;
  updateUndoButton();
  
  // ربط الأحداث
  btnPlayNav.addEventListener('click', showGameModal); // For the navbar 'Play Now' button
  btnRules.addEventListener('click', showRulesModal);
  if (btnStart) {
    // btnStart is the main 'ابدأ اللعب' button in the welcome banner
    btnStart.addEventListener('click', startGame);
  } else {
    // This warning should ideally not appear anymore as we added id="startBtn" to index.html
    console.warn("WARNING: btnStart (the main play button) was not found, so its event listener for startGame is not attached.");
  }
  
  if (btnPlayAgain) btnPlayAgain.addEventListener('click', resetAndStartGame);
  else console.error("ERROR: Cannot add listener to btnPlayAgain because it is null.");

  let currentRevealBtn = document.getElementById('revealBtn'); 
  if (currentRevealBtn) currentRevealBtn.addEventListener('click', revealAnswer);
  else console.error("ERROR: Cannot add listener to revealBtn because currentRevealBtn is null.");
  undoBtn.addEventListener('click', undoLastMove); // ربط زر التراجع
  
  // أزرار الإجابة الجديدة (صح/خطأ)
  trueBtn.addEventListener('click', function() {
    sndClick.play();
    checkAnswer(false, true); // ليس انتهاء وقت، إجابة صحيحة
  });
  
  falseBtn.addEventListener('click', function() {
    sndClick.play();
    checkAnswer(false, false); // ليس انتهاء وقت، إجابة خاطئة
  });

  // إضافة مستمعي أحداث إغلاق للأزرار
  closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      sndClick.play();
      const parentModal = btn.closest('.modal');
      const wasRulesModalActive = rulesModal && rulesModal.classList.contains('active');
      
      hideAllModals(); // Hides all modals and overlay

      if (wasRulesModalActive) {
        updateMainTimerDisplayFromSettings();
      }

      // Only end game if the game modal was closed and game was active
      // This logic might need further refinement based on exact game flow for closing modals during active game
      if (gameActive && parentModal && parentModal.classList.contains('game-modal')) {
        // endGame(); // Consider if closing game modal should always end game or just pause
      }
    });
  });

  if (overlay) {
    overlay.addEventListener('click', function() {
      sndClick.play();
      const wasRulesModalActive = rulesModal && rulesModal.classList.contains('active');
      // const wasGameModalActive = gameModal && gameModal.classList.contains('active');

      hideAllModals();

      if (wasRulesModalActive) {
        updateMainTimerDisplayFromSettings();
      }
      
      // if (gameActive && wasGameModalActive) {
      //   // endGame(); // Similar consideration for overlay click
      // }
    });
  }

  // Perform initial game reset to set up the UI correctly
  resetGame();

  // Event listener for the new Home button
  if (btnHome) {
    btnHome.addEventListener('click', function() {
      sndClick.play();
      hideAllModals();
      showElement(welcomeBanner);
      // Ensure game specific UIs are hidden. gameModal is the main container.
      if (gameModal && gameModal.classList.contains('active')) hideElement(gameModal);

      if (gameActive) {
        endGame(false); // Pass false to indicate not a win, just reset/exit
      }
      // resetGame(); // endGame should ideally handle resetting relevant parts or call resetGame itself.
      // Ensure body classes are reset if they change game state appearance
      document.body.classList.remove('game-active', 'red-turn', 'green-turn');
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.remove('game-active');
        navbar.classList.remove('red-turn', 'green-turn');
      } 
    });
  }
}

// إظهار وإخفاء العناصر المختلفة
function hideAllModals() {
  rulesModal.classList.remove('active');
  gameModal.classList.remove('active');
  overlay.classList.remove('active');
}

function showRulesModal() {
  sndClick.play();
  overlay.classList.add('active');
  rulesModal.classList.add('active');
}

function showGameModal() {
  sndClick.play();
  welcomeBanner.style.display = 'none';
  overlay.classList.add('active');
  gameModal.classList.add('active');
  hideElement(gameResults);
  resetGame();
}

function hideElement(element) {
  if (element) {
    element.setAttribute('hidden', 'true');
    element.style.display = 'none';
  }
}

function showElement(element) {
  if (element) {
    element.removeAttribute('hidden');
    element.style.display = 'block'; // Assuming block display is appropriate for welcomeBanner
  }
}

// اختيار الفريق
function getTeam() {
  return document.querySelector('input[name="team"]:checked').value;
}

// بناء الشبكة السداسية
function createHexGrid() {
  hexGrid.innerHTML = '';
  let cols;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    cols = 3;
  } else if (screenWidth <= 768) {
    cols = 5;
  } else {
    cols = 7;
  }

  const totalLetters = letters.length;
  const rows = Math.ceil(totalLetters / cols);

  for (let r = 0; r < rows; r++) {
    const rowEl = document.createElement('div');
    rowEl.className = 'row'; // تأكد من أن هذا هو اسم الصنف الصحيح في CSS
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      if (idx < totalLetters) {
        const cell = document.createElement('div');
        cell.className = 'hexagon cell'; // إضافة الصنف cell لتمكين التراجع
        cell.dataset.letter = letters[idx];
        cell.innerHTML = `<span>${letters[idx]}</span>`;
        cell.onclick = () => handleHexClick(cell);
        rowEl.appendChild(cell);
      }
    }
    hexGrid.appendChild(rowEl);
  }
}

// عند النقر على حرف
function handleHexClick(cell) {
  const letter = cell.dataset.letter;
  if (answered.has(letter)) return;
  sndClick.play();
  currentCell = cell; currentLetter = letter;
  qArea.hidden = false;
  aText.textContent = '';
  document.querySelector('.encourage').textContent = '';
  const list = questions[letter] || [];
  const obj  = list[Math.floor(Math.random()*list.length)];
  qText.textContent = obj?.q || 'لا يوجد سؤال';
  aText.dataset.answer = obj?.a || '';
  startQuestionTimer();
}

// مؤقت السؤال
function startQuestionTimer() {
  clearInterval(questionInterval);
  questionTime = questionDuration;
  qTimerEl.textContent = questionTime;
  currentCell.classList.add('active');
  showElement(qArea);
  hideElement(aText);
  
  // إعادة تمكين الأزرار
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  
  questionInterval = setInterval(() => {
    questionTime--;
    qTimerEl.textContent = questionTime;
    if (questionTime <= 0) {
      clearInterval(questionInterval);
      sndTimeout.play();
      checkAnswer(true, false); // انتهاء الوقت
    }
  }, 1000);
}

// التحقق من الإجابة
function checkAnswer(isTimeout = false, isTrue = null) {
  clearInterval(questionInterval);
  
  // إظهار الإجابة الصحيحة
  const correctAnswer = aText.dataset.answer;
  aText.textContent = correctAnswer;
  showElement(aText);
  
  // تحديث نقاط الفريق الحالي
  const currentTeam = getTeam();
  // تحديد الخلية الحالية بشكل صحيح
  // تأكد من أن الخلية موجودة فعلاً حتى يمكن التراجع عنها
  const cellElement = document.querySelector(`.cell[data-letter="${currentLetter}"]`);
  console.log(`الحرف الحالي: ${currentLetter}, الخلية: ${cellElement ? 'موجودة' : 'غير موجودة'}`);
  
  // تحديد ما إذا كانت الإجابة صحيحة
  let isCorrect = false;
  
  // إذا كان السؤال قد انتهى وقته
  if (isTimeout) {
    isCorrect = false;
  }
  // إذا كان المستخدم قد ضغط على زر صح أو خطأ
  else if (isTrue !== null) {
    // الإجابة صحيحة إذا كان المستخدم قد ضغط على الزر الصحيح
    isCorrect = isTrue === (qText.dataset.answer === qText.textContent);
  }
  
  // إزالة أي فئات موجودة من العبارة التحفيزية
  encourageText.classList.remove('success', 'fail');
  
  // حفظ معلومات الحركة الحالية للتراجع لاحقاً
  lastMove = {
    letter: currentLetter,
    cell: cellElement, // استخدام cellElement بدلاً من currentCell
    team: currentTeam,
    wasCorrect: isCorrect,
    score: isCorrect ? 1 : 0
  };
  
  if (isCorrect) {
    // تفعيل زر التراجع عندما تكون الإجابة صحيحة
    canUndo = true;
    updateUndoButton();
    console.log(`تم تفعيل زر التراجع للحرف: ${currentLetter}`);
  } else {
    canUndo = false;
    updateUndoButton();
  }
  
  if (isCorrect) {
    // فقط عند الإجابة الصحيحة نقوم بتلوين الخلية وإضافتها للقائمة
    sndSuccess.play();
    scores[currentTeam]++;
    answered.add(currentLetter);
    currentCell.classList.add(`correct-${currentTeam}`, 'answered');
    
    // إضافة عبارة تحفيزية مع تنسيق النجاح
    encourageText.textContent = successPhrases[Math.floor(Math.random() * successPhrases.length)];
    encourageText.classList.add('success');
    
    // تأثير وميض للعبارة التحفيزية
    encourageText.style.transform = 'scale(1.1)';
    setTimeout(() => {
      encourageText.style.transform = 'scale(1)';
    }, 200);
    
    updateScores();
  } else {
    // عند الإجابة الخاطئة لا نقوم بتلوين الخلية
    sndFail.play();
    
    // لا نضيف الخلية للمُجاب عليها ولا نقوم بتلوينها
    // answered.add(currentLetter); // تم إزالة هذا السطر
    // currentCell.classList.add('answered'); // تم إزالة هذا السطر
    
    // إضافة عبارة تحفيزية مع تنسيق الفشل
    encourageText.textContent = failPhrases[Math.floor(Math.random() * failPhrases.length)];
    encourageText.classList.add('fail');
    
    // تأثير اهتزاز للعبارة التحفيزية
    encourageText.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(0)' }
      ],
      { duration: 500 }
    );
  }
  
  currentCell.classList.remove('active');
  
  // تعطيل الأزرار بعد الإجابة
  trueBtn.disabled = true;
  falseBtn.disabled = true;
  
  // إعادة تمكين الأزرار بعد فترة
  setTimeout(() => {
    trueBtn.disabled = false;
    falseBtn.disabled = false;
  }, 1500);
}

// دالة إظهار الإجابة
function revealAnswer() {
  // تشغيل صوت كشف الإجابة
  sndReveal.play();
  
  // إيقاف مؤقت السؤال
  clearInterval(questionInterval);
  
  // إظهار الإجابة الصحيحة فقط
  const correctAnswer = aText.dataset.answer;
  aText.textContent = correctAnswer;
  showElement(aText);
  
  // عند الضغط على زر أظهر الإجابة، لا يمكن التراجع
  canUndo = false;
  updateUndoButton();
  
  // تنبيه: زر كشف الإجابة يقوم فقط بإظهار الإجابة دون تلوين الخلية
  
  // تعطيل أزرار الإجابة مؤقتًا
  trueBtn.disabled = true;
  falseBtn.disabled = true;
  
  // إعادة تمكين الأزرار بعد فترة
  setTimeout(() => {
    trueBtn.disabled = false;
    falseBtn.disabled = false;
  }, 1500);
}

// دالة التراجع عن آخر إجابة
function undoLastMove() {
  console.log('undoLastMove function CALLED!');
  // التحقق من إمكانية التراجع
  if (!canUndo || !lastMove.cell) {
    console.log('لا يمكن التراجع');
    return;
  }
  
  // تشغيل صوت النقر
  sndClick.play();
  
  console.log('تنفيذ التراجع عن الحرف:', lastMove.letter);
  
  // استعادة حالة الخلية وحالة اللعبة
  if (lastMove.wasCorrect) {
    // إزالة الحرف من قائمة الحروف المُجاب عليها
    answered.delete(lastMove.letter);
    
    // إزالة تنسيق الخلية
    lastMove.cell.classList.remove(`correct-${lastMove.team}`, 'answered');
    
    // تخفيض النقاط
    scores[lastMove.team] -= lastMove.score;
    
    // تحديث النقاط في واجهة المستخدم مباشرة
    redScoreEl.textContent = scores.red;
    greenScoreEl.textContent = scores.green;
    
    console.log(`تم تحديث النقاط: أحمر=${scores.red}, أخضر=${scores.green}`);
  }
  
  // إزالة التأثيرات من العبارة التحفيزية
  encourageText.textContent = '';
  encourageText.classList.remove('success', 'fail');
  
  // منع التراجع مرة أخرى حتى يتم تحديث آخر حركة
  canUndo = false;
  updateUndoButton();
}

// دالة لتحديث حالة زر التراجع
function updateUndoButton() {
  // التأكد من أن الزر موجود
  if (undoBtn) {
    // تحديث خصائص الزر حسب حالة التراجع
    undoBtn.disabled = !canUndo;
    undoBtn.style.opacity = canUndo ? '1' : '0.6';
    undoBtn.style.cursor = canUndo ? 'pointer' : 'not-allowed';
    
    // رسالة توضيحية للمطور
    console.log(`حالة زر التراجع: ${canUndo ? 'نشط' : 'معطل'}`);
    
    if (canUndo && lastMove.letter) {
      console.log(`يمكن التراجع عن الحرف: ${lastMove.letter}`);
    }
  }
}


// Function to update the main game timer display based on selected settings
function updateMainTimerDisplayFromSettings() {
  if (!timerEl) { // timerEl هو <span id="timer">
    console.warn("updateMainTimerDisplayFromSettings: timerEl element not found.");
    return;
  }

  let timeInSeconds;
  const selectedTimeOption = document.querySelector('input[name="gameTimeOption"]:checked');

  if (selectedTimeOption) {
    timeInSeconds = parseInt(selectedTimeOption.value, 10);
  } else {
    const defaultTimeOption = document.querySelector('input[name="gameTimeOption"][value="180"]');
    if (defaultTimeOption) {
        timeInSeconds = parseInt(defaultTimeOption.value, 10);
    } else {
        timeInSeconds = 180; // Fallback
    }
    // console.warn("updateMainTimerDisplayFromSettings: No gameTimeOption actively checked, using default for display.");
  }

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// بدء اللعبة
function startGame() {
  // إعدادات اللعبة
  const difficultyLevel = document.querySelector('input[name="difficulty"]:checked').value;
  const team = getTeam();
  const settings = difficultySettings[difficultyLevel];

  // قراءة وقت اللعبة المختار من الخيارات الجديدة
  const selectedTimeOption = document.querySelector('input[name="gameTimeOption"]:checked');
  if (selectedTimeOption) {
    mainTime = parseInt(selectedTimeOption.value, 10); // الوقت بالثواني مباشرة
  } else {
    // قيمة افتراضية إذا لم يتم العثور على خيار محدد (احتياطي)
    mainTime = 180; // 3 دقائق كافتراضي
    console.warn("startGame: No gameTimeOption selected, defaulting to 180 seconds.");
  }
  
  questionDuration = settings.questionTime; // بالثواني
  // gameDuration لم يعد المصدر الرئيسي لـ mainTime، ولكن يمكن الاحتفاظ به إذا كان يُستخدم في مكان آخر
  // أو يمكن تحديثه: gameDuration = mainTime / 60; (إذا أردت gameDuration بالدقائق)

  // 1. إعداد واجهة المستخدم الأساسية لبدء اللعبة
  if (welcomeBanner) {
    welcomeBanner.style.display = 'none';
  } else {
    console.warn("startGame: welcomeBanner element not found.");
  }
  if (overlay) overlay.classList.add('active');
  if (gameModal) gameModal.classList.add('active');
  
  // 2. التأكد من إخفاء نافذة القواعد إذا كانت مفتوحة
  if (rulesModal) rulesModal.classList.remove('active');
  
  // 3. عرض منطقة اللعب (الشبكة السداسية)
  if (hexGrid) showElement(hexGrid);
  
  // 4. تفعيل حالة اللعب
  gameActive = true;
  
  // 5. تشغيل صوت بدء اللعبة
  sndStart.play();
  
  // إعداد الشبكة السداسية للعب
  createHexGrid();
  
  // بدء المؤقت الرئيسي
  startMainTimer();
  
  // تحديث واجهة المستخدم
  document.body.classList.add('game-active');
  document.querySelector('header').classList.add('game-active');
}

// بدء المؤقت الرئيسي
function startMainTimer() {
  mainInterval = setInterval(() => {
    mainTime--;
    timerEl.textContent = mainTime;
    if (mainTime <= 0) {
      endGame();
    }
  }, 1000);
}
// إنهاء اللعبة
function endGame() {
  clearInterval(mainInterval);
  clearInterval(questionInterval);
  gameActive = false;
  
  // إخفاء منطقة السؤال إن كانت ظاهرة
  hideElement(qArea);
  
  // عرض نتائج اللعبة
  redResultEl.textContent = scores.red;
  greenResultEl.textContent = scores.green;
  
  // تعطيل زر التراجع عند انتهاء اللعبة
  canUndo = false;
  updateUndoButton();
  
  // تحديد الفريق الفائز
  if (scores.red > scores.green) {
    winnerNameEl.textContent = "الفريق الأحمر";
    winnerNameEl.className = "winner red";
  } else if (scores.green > scores.red) {
    winnerNameEl.textContent = "الفريق الأخضر";
    winnerNameEl.className = "winner green";
  } else {
    winnerNameEl.textContent = "تعادل";
    winnerNameEl.className = "winner";
  }
  
  // تشغيل صوت النهاية وعرض النتائج
  sndWin.play();
  showElement(gameResults);
  
  // تحديث واجهة المستخدم
  document.body.classList.remove('game-active');
  document.querySelector('header').classList.remove('game-active');
}

// إعادة ضبط وبدء اللعبة من جديد
function resetAndStartGame() {
  sndClick.play();
  hideElement(gameResults);
  resetGame();
  startGame();
}

// إعادة ضبط اللعبة
function resetGame() {
  // إعادة ضبط المتغيرات
  answered = new Set();
  scores = { red: 0, green: 0 };
  canUndo = false; // تعطيل زر التراجع
  updateUndoButton();
  
  // إعادة ضبط العدادات
  clearInterval(mainInterval);
  clearInterval(questionInterval);
  
  // إعادة ضبط واجهة المستخدم
  updateScores();
  hideElement(qArea);
  
  // إزالة الخلايا السابقة
  hexGrid.innerHTML = '';
  
  // إنشاء الشبكة السداسية
  createHexGrid();
  
  // إعادة ضبط منطقة السؤال
  hideElement(qArea);
  aText.textContent = '';
  encourageText.textContent = '';
}

// تحديث النقاط
function updateScores() {
  redScoreEl.textContent = scores.red;
  greenScoreEl.textContent = scores.green;
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  // تهيئة التطبيق بشكل كامل عند تحميل الصفحة
  initApp();
  updateMainTimerDisplayFromSettings(); // Update timer display with default/selected time on load
  console.log('Application initialized.');
});