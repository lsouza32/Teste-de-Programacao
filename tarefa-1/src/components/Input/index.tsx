import { Container, ContainerInput, Text } from "./styles";
import { useState, useEffect } from 'react';

export function Input(){
    
    const [selectedOption, setSelectedOption] = useState<string>('RomanToArabic');
    const [disableInput, setDisableInput]= useState<boolean>(false);
    
    const [romanNumeral, setRomanNumeral] = useState('');
    const [arabicNumeral, setArabicNumeral] = useState('');
    
    // Funcao para selecionar para qual tipo devera ser a conversao
    const selectType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        
        //if para desativar o input, dessa forma controlamos que vai haver somente um tipo de conversao por vez
        if(value === 'RomanToArabic'){
            setDisableInput(false);
        }
        else(setDisableInput(true));
    };
    
    //funcao para salvar o input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(selectedOption === 'ArabicToRoman'){            
            // para converter para romano, salva o numero arabico
            setArabicNumeral(event.target.value.toUpperCase());           
           
        }
        if(selectedOption=== 'RomanToArabic'){     
            // para converter para o arabico, salva o numero romano       
            setRomanNumeral(event.target.value.toUpperCase());
        }
    };

    
    
    useEffect(()=>{

        // ----------FUNCAO PARA VERIFICAR SINTAXE NAO ESTA FUNCIONANDO
        // function RomanSintaxe(roman: string){
        //     let count =0;
        //     let correctSintaxe= false;
    
        //     for(let i =0; i<=roman.length; i++ ){
        //         if(roman[i] === roman[i+1]){// usado para verificar se o algarismo vai se repetir mais de 3x
        //             count++;// conta cada vez que encontra uma letra repetida,
        //             //Um algarismo não pode ser repetido lado a lado por mais de três vezes.
        //             console.log('entrou no if coubnt')
        //         }else(count=0)// quando nao se repedir, zera o contador
    
        //         // verificacoes da sintaxe para numeros romanos
    
        //         //A letra I é utilizada somente antes do V e do X, por exemplo: IV = 4; IX = 9;
        //         if(roman[i] === 'I' && (roman[i + 1] !== 'V' && roman[i + 1] !== 'X')){
        //             correctSintaxe= true;
        //         }else(correctSintaxe=false)
    
        //         //A letra X é utilizada somente antes do L e do C, por exemplo: XL = 40; XC = 90;
        //         if(roman[i] === 'X' && (roman[i + 1] !== 'L' && roman[i + 1] !== 'C')){
        //             correctSintaxe= true;
        //         }else(correctSintaxe=false)
    
        //         //A letra C é utilizada somente antes do D e do M, por exemplo, CD = 400; CM = 900.
        //         if(roman[i] === 'C' && (roman[i + 1] !== 'D' && roman[i + 1] !== 'M')){
        //             correctSintaxe= true;
        //         }else(correctSintaxe=false)
    
        //     }
    
        //     if(count <= 3 && correctSintaxe==true){
        //         return(true) // caso passar nos 2 testes retorna true para seguir com a conversao
        //     }
        //     return false;              
            
        // }
        
      //funcao romano -> arabico
      function roman_to_arabic(roman_numeral: string): number {
          const roman_values: { [key: string]: number } = {
              I: 1,
              V: 5,
              X: 10,
              L: 50,
              C: 100,
              D: 500,
              M: 1000,
          };
          
          let arabic_numeral = 0;
          let previous_value = 0;
          
          for (const char of roman_numeral.split('').reverse()) {
              const value = roman_values[char];
              
              if (value !== undefined) {
                  if (value >= previous_value) {
                      arabic_numeral += value;
                  } else {
                      arabic_numeral -= value;
                  }
                  
                  previous_value = value;
              }
          }
          
          return arabic_numeral;
      }
      
      //funcao arabico -> romano
      function arabic_to_roman(arabic_numeral: number): string {
          const arabic_values: [number, string][] = [
              [1000, 'M'],
              [900, 'CM'],
              [500, 'D'],
              [400, 'CD'],
              [100, 'C'],
              [90, 'XC'],
              [50, 'L'],
              [40, 'XL'],
              [10, 'X'],
              [9, 'IX'],
              [5, 'V'],
              [4, 'IV'],
              [1, 'I'],
          ];
          
          let roman_numeral = '';
          
          for (const [value, symbol] of arabic_values) {
              while (arabic_numeral >= value) {
                  roman_numeral += symbol;
                  arabic_numeral -= value;
              }
          }
          
          return roman_numeral;
      }
      
      if(selectedOption=='RomanToArabic'){                   
        setArabicNumeral(roman_to_arabic(romanNumeral).toString());     
      }

      if(selectedOption=='ArabicToRoman'){
          setRomanNumeral(arabic_to_roman(Number(arabicNumeral)));
      }
    },[selectedOption, romanNumeral, arabicNumeral])
    
    
    return(
          <Container>
            <select onChange={selectType} style={{marginBottom: '32px'}}>
              <option value='RomanToArabic'>Romano para Arabico</option>
              <option value='ArabicToRoman'>Arabico para Romano</option>
            </select>
            
            <Text>Romano</Text>

            <ContainerInput>
              <input
                value={romanNumeral}
                onChange={handleInputChange}
                autoComplete="false"     
                disabled={disableInput}                         
              />
            
            </ContainerInput>
            
            <Text>Arabico</Text>

            <ContainerInput>
              <input
                value={arabicNumeral}
                onChange={handleInputChange}
                autoComplete="false" 
                disabled={!disableInput}      
              />
            </ContainerInput>
          
        </Container>
      );
    }