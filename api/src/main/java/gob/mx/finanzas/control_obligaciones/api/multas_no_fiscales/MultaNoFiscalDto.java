package gob.mx.finanzas.control_obligaciones.api.multas_no_fiscales;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class MultaNoFiscalDto {
    private Long id;  // Identificador único generado por la base de datos
    private String numeroOficio;  // Número de oficio asociado a la multa
    private LocalDate fechaRecepcion;  // Fecha en la que se recibió la multa
    private Long idEntidadSolicitante;  // ID de la entidad solicitante (referencia)
    private String concepto;  // Descripción del concepto de la multa
    private BigDecimal montoTotal;  // Monto total de la multa
    private Long idPersona;  // ID de la persona asociada a la multa
    private String nombrePersona;  // Nombre completo de la persona
    private String codigoPostal;  // Código postal de la persona
    private Long idLocalidad;  // ID de la localidad de la persona
    private Long idColonia;  // ID de la colonia de la persona
    private String calle;  // Calle asociada a la persona
    private String numeroExterior;  // Número exterior de la dirección
    private String numeroInterior;  // Número interior de la dirección (opcional)
    
    // Métodos getter y setter
}