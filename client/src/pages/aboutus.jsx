import { useState } from "react"
import Header from "../componments/header"

export default function AboutUsPage(){

    return(
        <main className="">
            <Header />
            <section className=" mt-12">
            <div className="py-8 px-4 mx-auto max-w-screen-xl fredoka sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white">Sıkça Sorulan Sorular</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                MangaBridge Nedir ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">MangaBridge, bir lise öğrencisi tarafından geliştirilen, istediğiniz bir manganın yeni bölümü geldi mi ? Bu sitede 20.bölüme kadar çevirmiş acaba devamı varmı ? Gibi sorularına çözüm getiren, Çevirenlerin hakkına girmeden tüketiciye ulaşmasını sağlayan bir platformdur.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                MangaBridge Amacı Nedir ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Küçük çeviri sitelerinin gelişimine ve tanıtımına yardımcı olmak, aynı zamanda büyük sitelerde tatlı bir çeviri rekabeti oluşturup Türkiyede asya bazlı roman endüstrisini geliştirmektir.</p>
                        </div>
                        <div className="mb-10">                        
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Benim sitemi iznim olmadan koymuşsunuz.
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Koyulan siteler bu sitenin yapım aşamasında test amaçlı veya bu sitede barınmasını istediğimiz saygıdeğer çeviri gruplarıdır. Eğerki sitenizin burada olmasını istemiyorsanız, sadece söylemeniz yeterli : alper.gezer13@gmail.com</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Benim Sitem Neden Burada Yok ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Sitemiz şu an hala gelişim aşamasında olup, yeni siteler eklemek için çalışmalara devam etmektedir. Eğerki sitenizi burda görmek isterseniz siziin kadar bizde bunu gerçekleştirmek bize mutluluk verir. Ulaşabilirsiniz : alper.gezer13@gmail.com</p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Özel Teşekkürler.
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">MangaGecesi.com , her ne kadar şu an kapanmış olsa dahi beni bu yola sürükleyen, endüstriye sokan ve bilmese dahi ilham veren Lynx ve ekip arkadaşlarına teşekkür ediyorum. Kapanmadan önce en iyi sitelerden biriydi...</p>
                        </div>
                        
                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Hesap Açmanın Amacı Nedir ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Şu anda Okuduğunuz mangaları kaydetmenize işe yaramakla birlikte, ileride kaydettiğiniz mangaların yeni bölümlerini bildirmek, koleksiyon oluşturmak, bölüm takibi gibi özellikler eklenecektir. Mangalarla ilgili Blog yazabileceksiniz. Sitemiz hala beta aşamasında olduğu için anlayış göstermenizi rica ediyorum. :)</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Aynı mangayı farklı isimlerde kopyasını gördüm, sitenin amacı bunu engellemek değil miydi ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Biz verileri alırken / güncellerken isimlerine ve tarayıcı uzantılarına göre alıyoruz, malesef aynı olanları engelleyebilsekte türkçeye çevrilmiş veya alternatif isimler manuel olarak birleştirilmesine rağmen hala gözümüzden kaçabiliyor. Bildirirseniz çok mutlu oluruz !</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Sitelerden Verileri Nasıl Topluyorsunuz ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Sitelerden verileri her site için özel geliştirilmiş örümcek yazılımlar sayesinde bütün siteyi tarayarak güncelliyoruz. Eğeri burada mevcut bir siteyseniz, lütfen bize bir API sağlayın :,)</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                MangaBridge Çeviri Yapıyor Mu ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Evet, fakat hala beta aşamasında olduğu için şu anlık yayınlanmıyor.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Siteyle İlgili Bir Bug, Fikir Var Aklımda.
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Sitemiz hala geliştirme aşamasında. Duymayı çok isterim ! alper.gezer13@gmail.com Ulaşabilirsiniz.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Mangalar Ne zaman Güncelleniyor ?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Düzenli aralıklarla(4 saat) günceleniyor.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}