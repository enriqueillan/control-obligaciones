package gob.mx.finanzas.control_obligaciones.api.multas_no_fiscales;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class CrearMultaNoFiscalDto {
    private String numeroOficio;
    private LocalDate fechaRecepcion;
    private Long idEntidadSolicitante;
    private String concepto;
    private BigDecimal montoTotal;
    private Long idPersona;
    private String nombre;
    private String codigoPostal;
    private Long idLocalidad;
    private Long idColonia;
    private String calle;
    private String numeroExterior;
    private String numeroInterior;
    // getters y setters
}