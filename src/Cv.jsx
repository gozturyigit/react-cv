import React from 'react';
import './App.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons

function Cv() {
    return (
        <div className="container">
            <div className="sidebar">
                <img src="" alt="Resim Koyabiliriz" />
                <h1>Yiğit GÖZTÜR</h1>
                <p>yigitgoztur@gmail.com | +90 555 555 5555</p>

                {/* Social Media Links Section */}
                <div className="social-media">
                    <h3>Sosyal Medya</h3>
                    <ul>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/gozturyigit" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} /> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <div className="section">
                    <h2>Kişisel Bilgiler</h2>
                    <ul>
                        <li><strong>Ad:</strong> Yiğit</li>
                        <li><strong>Soyad:</strong> Göztür</li>
                        <li><strong>İletişim:</strong> yigitgoztur@gmail.com | +90 555 555 5555</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Eğitim Bilgileri</h2>
                    <ul>
                        <li><strong>Üniversite:</strong> Kapadokya Üniversite</li>
                        <li><strong>Bölüm:</strong> Bilgisayar Programcılığı</li>
                        <li><strong>Mezuniyet Yılı:</strong> 2023- Devam Ediyor</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>İş Deneyimi</h2>
                    <ul>
                        <li>
                            <strong>Şirket Adı:</strong> BAYNEL MALZEME BYLED BYLZR<br />
                            <strong>Pozisyon:</strong> Müdür<br />
                            <strong>Çalışma Süresi:</strong> Halen Devam Ediyor.<br />
                            <strong>Açıklama:</strong> Birçok sektörde hizmet veriyoruz
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Yetenekler</h2>
                    <ul>
                        <li>Çizim Programları : CorelDraw , AutoCad, Fusion360, AlphaCam</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Hobiler ve İlgi Alanları</h2>
                    <ul>
                        <li>Çalışmak</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cv;
