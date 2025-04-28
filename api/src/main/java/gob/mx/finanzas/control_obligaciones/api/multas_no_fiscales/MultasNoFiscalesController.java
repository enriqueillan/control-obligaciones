package gob.mx.finanzas.control_obligaciones.api.multas_no_fiscales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/multas-no-fiscales")
public class MultasNoFiscalesController {

    @Autowired
    private  MultaNoFiscalService multaNoFiscalService;

    

    @PostMapping
    public ResponseEntity<MultaNoFiscalDto> crearMultaNoFiscal(@RequestBody @Valid CrearMultaNoFiscalDto request) {
        MultaNoFiscalDto respuesta = multaNoFiscalService.crearMulta(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(respuesta);
    }
    
}
