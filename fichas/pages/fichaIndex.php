<?php 
    # Classes de Construção

    class construtorHTML{
        private function GetJsonRequest($url): array{
            $file = file_get_contents($url);

            return json_decode($file, true);
        }

        private function htmlHabilidades ($hability): string{
             // Build Hability 
            $html = '<h2>Habilidades</h2>';
            
            $html .= '<table>'; 

            $count = 0;
            while(current($hability)){
                // Arquivo de Ficha

                $habilidade_atual = key($hability);
                
                if($count == 0){
                    $html .= '<tr>';
                }
                
                $html .= '<td>' . $habilidade_atual . '</td>';
                $html .= '<td>' . $hability[$habilidade_atual]['valor'] . '</td>';
                // $html .= '</tr>';

                if($count > 2){
                    $html .= '</tr>';
                    $count = 0;
                    
                }else{
                    $count++;
                }

                next($hability);

                
            }
            $html .= '</table>';

            return $html;
                

        }

        private function htmlPericias($pericia): string{
            $html = '<h2>Pericias</h2>';
            $html .= '<ul>';
            while(current($pericia)){
                $current_pericia = key($pericia);
                // $pericia $current_pericia;
                $p =& $pericia[$current_pericia];

                $html = $html . "<li><strong>" . $p['nome'] . "</strong>: &ensp;" . $p['total'] . "</li>";
                

                next($pericia);
                

            }
            $html .= '</ul>';
            return ($html);

        }
        private function htmlPoderes($poderes): string{
            $html = '<h2>Poderes</h2>';

            $html .= '<div style="background-color: white; padding: 10px">';

            while(current($poderes)){
                $current_pod = key($poderes);
                $poder_atual = $poderes[$current_pod];
                

                $html .= '<p> <strong>Poder</strong>: ' . $poder_atual['NomePoder'] . '</p>';
                $html .= '<p>' . $poder_atual['nomeEfeito'] . ' ' . $poder_atual['graduacao'] . '</p>';
                $html .= '<p><strong>Pontos gastos</strong>: ' . $poder_atual['pontos'] . '</p>';

                next($poderes);
            }

            $html .= '</div>';

            return ($html);
        }

        public function CreateHTML(){
            $JsonList = $this->GetJsonRequest('http://127.0.0.1:5000');
            $html = '';
            
            $fichaLista = $JsonList;
            
            // while(current($fichaLista)){
                // Passagem pelas Fichas
                $currentkey = key($fichaLista);                

                // Nome do Personagem 
                $html .= "<h1>". $fichaLista['name'] ."</h1>";

                $html .= $this->htmlHabilidades($fichaLista['habilidades']);
                $html .= $this->htmlPericias($fichaLista['pericias']);
                $html .= $this->htmlPoderes($fichaLista['poderes']);
                
                // next($fichaLista);
            // }
            // $html = key($JsonList["index"]);

            // $html = var_dump();
            // Lista de Fichas
            
            

            return $html;
        }
    }
    $construtor = new construtorHTML();
    
    // return ();
?>