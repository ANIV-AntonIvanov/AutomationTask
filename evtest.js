exports.EvtestBase = class EvtestBase{
    constructor(page){
        this.page = page
        this.component = {} //object for key-value pairs
        this.names = ['case', 'cpu', 'motherboard','ram','gpu','psu','cpu cooler','ssd']//object's keys
        this.parts = [                                                                   
                String(page.getByText('NZXT H5 Flow')),
                String(page.getByText('AMD Ryzen 7 5700X')),                                                          
                String(page.getByText('GIGABYTE B550 AORUS ELITE V2')),
                String(page.getByText('Kingston FURY Beast Black 16GB (2x8GB) 3200MHz')),
                String(page.getByText('GIGABYTE GeForce RTX­­ 4070 GAMING OC 12G')),
                String(page.getByText('Corsair RMe Series RM750e 750W')),
                String(page.getByText('Arctic Freezer 34 AMD /Bulk/')),
                String(page.getByText('Team Group MP44L 500GB')),
            ]//object's values
    }

    async firstPart(){
        await this.page.goto('https://gplay.bg/')
        await this.page.locator('#vue > div.header-bottom.flex-grow-0 > div > div > div.nav-menu > ul > li:nth-child(4) > a > span').hover()
        await this.page.getByRole('link', { name: 'Компютърни конфигурации' }).click()
        await this.page.getByRole('link', { name: '2', exact: true }).click();
        await this.page.getByRole('link', { name: 'GPLAY CRUSHER X R7 GEFORCE RTX4070' }).nth(1).click()
        for(let i = 0; i < 8;i++) //obj[name] = value setting keys and values (first part of the task)
        {
            this.component[this.names[i]] = this.parts[i]
        } 
        for (const [key, value] of Object.entries(this.component)) {
            console.log(`${key}: ${value}`);
        } //printing out object
    }

    async secondPart(){
        await this.page.goto('https://pcbuild.bg/');
        await this.page.getByRole('link', { name: 'PC Конфигуратор' }).click();
        await this.page.locator('body > div.cookies-alert > a').click()
        let i = 0
            do{
                switch(this.names[i]){
                    case this.names[0]:
                        await this.page.locator('[id="\\32 -31831"]').check();
                        i++
                        continue
                    case this.names[1]:
                        this.page.locator('#part-select-4').getByRole('link').click();
                        this.page.getByRole('textbox', { name: 'Търси...' }).fill(this.parts[1])
                        await this.page.locator('#part-selection-4 > ul > li:nth-child(25) > a > span > span.part-select-option-title').click() 
                        i++
                        continue
                    case this.names[2]:
                        this.page.locator('#part-select-10').getByRole('link').click();
                        this.page.getByRole('textbox', { name: 'Търси...' }).fill(this.parts[2])
                        await this.page.locator('#part-selection-10 > ul > li:nth-child(27) > a > span > span.part-select-option-title').click() 
                        i++
                        continue
                    case this.names[3]:
                        this.page.locator('#selected-option-11').click()
                        this.page.getByRole('textbox', { name: 'Търси...' }).fill(this.parts[3])
                        await this.page.locator('#part-selection-11 > ul > li:nth-child(197) > a > span > span.part-select-option-title').click()
                        i++
                        continue
                    case this.names[4]:
                        this.page.locator('#selected-option-12').click()
                        this.page.getByRole('textbox', { name: 'Търси...' }).fill(this.parts[4])
                        await this.page.locator('#part-selection-12 > ul > li:nth-child(115) > a > span > span.part-select-option-title').click()
                        i++
                        continue
                    case this.names[5]:
                        this.page.locator('#selected-option-20').click()
                        this.page.getByRole('textbox', { name: 'Търси...' }).fill(this.parts[5])
                        await this.page.locator('#part-selection-20 > ul > li:nth-child(45) > a > span > span.part-select-option-title').click()
                        i++
                        continue
                    case this.names[6]:
                        this.page.locator('#selected-option-15').click()
                        this.page.getByRole('textbox', { name: 'Търси...' }).fill(this.parts[6])
                        await this.page.locator('#part-selection-15 > ul > li:nth-child(61) > a > span > span.part-select-option-title').click()
                        i++
                        continue
                    case this.names[7]:
                        this.page.locator('#selected-option-7').click()
                        this.page.getByRole('textbox', { name: 'Търси...' }).fill(this.parts[7])
                        await this.page.locator('#part-selection-7 > ul > li:nth-child(74) > a > span > span.part-select-option-title').click()
                        i++
                        break
                }
            }while(i < 8) //fills the fields with parts array's elements and selects the demanded option, we used names array to iterate through the cases
        await this.page.pause()
    }
}

//object model is used for better test running and optimization