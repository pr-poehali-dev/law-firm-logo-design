import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/img/7cfff5ec-721e-4565-918c-cd8a4eced720.jpg" 
                alt="Логотип юридической фирмы" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="font-serif text-2xl font-bold text-primary">ЮРИДИЧЕСКАЯ ФИРМА</h1>
                <p className="text-sm text-secondary">Профессиональные правовые услуги</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О фирме</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl font-bold text-primary mb-6">
            Защита ваших интересов —<br />наш профессиональный долг
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Оказываем квалифицированную юридическую помощь физическим и юридическим лицам. 
            Более 15 лет опыта в различных отраслях права.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8">
              Консультация
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">Наши услуги</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для решения самых сложных правовых вопросов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Scale" size={24} className="text-primary" />
                </div>
                <CardTitle>Гражданское право</CardTitle>
                <CardDescription>
                  Защита прав в гражданских спорах, составление договоров, представительство в суде
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building" size={24} className="text-primary" />
                </div>
                <CardTitle>Корпоративное право</CardTitle>
                <CardDescription>
                  Регистрация юридических лиц, корпоративные споры, слияния и поглощения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" size={24} className="text-primary" />
                </div>
                <CardTitle>Недвижимость</CardTitle>
                <CardDescription>
                  Сделки с недвижимостью, оформление права собственности, земельные вопросы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Семейное право</CardTitle>
                <CardDescription>
                  Развод, раздел имущества, опека и попечительство, алименты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <CardTitle>Трудовое право</CardTitle>
                <CardDescription>
                  Трудовые споры, составление трудовых договоров, защита прав работников
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                </div>
                <CardTitle>Уголовное право</CardTitle>
                <CardDescription>
                  Защита в уголовных делах, представительство на всех стадиях процесса
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-6">О нашей фирме</h3>
              <p className="text-muted-foreground mb-6">
                Наша юридическая фирма была основана в 2008 году группой опытных юристов с целью 
                предоставления качественных правовых услуг как частным лицам, так и корпоративным клиентам.
              </p>
              <p className="text-muted-foreground mb-8">
                За годы работы мы успешно решили более 2000 дел, накопили обширный опыт в различных 
                отраслях права и заслужили репутацию надежного партнера в юридических вопросах.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">решенных дел</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">выигранных дел</div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h4 className="font-serif text-xl font-bold text-primary mb-4">Почему выбирают нас</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h5 className="font-semibold">Профессионализм</h5>
                    <p className="text-sm text-muted-foreground">Высококвалифицированные юристы с многолетним опытом</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h5 className="font-semibold">Индивидуальный подход</h5>
                    <p className="text-sm text-muted-foreground">Каждое дело рассматривается с учетом всех особенностей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h5 className="font-semibold">Прозрачность</h5>
                    <p className="text-sm text-muted-foreground">Честные цены и полная отчетность по делу</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h5 className="font-semibold">Конфиденциальность</h5>
                    <p className="text-sm text-muted-foreground">Гарантируем полную защиту ваших данных</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">Контакты</h3>
            <p className="text-muted-foreground">Свяжитесь с нами для получения консультации</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, офис 203</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@lawfirm.ru</p>
                  <p className="text-muted-foreground">contact@lawfirm.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                  <p className="text-muted-foreground">Вс: выходной</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Получить консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и наш менеджер свяжется с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Имя *</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон *</label>
                    <input 
                      type="tel" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Описание вопроса</label>
                  <textarea 
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" 
                    placeholder="Кратко опишите ваш вопрос..."
                  />
                </div>
                <Button className="w-full">Отправить заявку</Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/img/7cfff5ec-721e-4565-918c-cd8a4eced720.jpg" 
                  alt="Логотип" 
                  className="h-8 w-8 object-contain"
                />
                <span className="font-serif font-bold text-primary">ЮРИДИЧЕСКАЯ ФИРМА</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные юридические услуги для физических и юридических лиц. 
                Защищаем ваши интересы на высшем уровне.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Гражданское право</li>
                <li>Корпоративное право</li>
                <li>Недвижимость</li>
                <li>Семейное право</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>г. Москва, ул. Тверская, д. 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@lawfirm.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Юридическая фирма. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;