import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from "../store/appContext.js"


export const PayPalButton = ({ amount, currency, userId, onPaymentSuccess, onPaymentError }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=AfuYMNsMlb0lLf8nzxAywEXBZL7ioEENXqoV52xwzMZmxt84j4wAvaA9qkWdHAflr_Oi4o20FupjgU4x&currency=${currency}`;
        script.async = true;
        script.onload = () => {
            console.log("Script de PayPal cargado correctamente");
            setLoaded(true);
        };
        script.onerror = (err) => {
            console.error("Error al cargar el script de PayPal:", err);
            setError("Hubo un problema al cargar PayPal. Por favor, desactiva cualquier bloqueador de anuncios y recarga la página.");
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [currency]);

    useEffect(() => {
        if (loaded) {
            console.log("Iniciando configuración de botones de PayPal");
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        console.log("Creando orden de PayPal");
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: async (data, actions) => {
                        console.log("Pago aprobado por PayPal, iniciando captura");
                        try {
                            console.log("Capturando orden...");
                            const order = await actions.order.capture();
                            console.log('Orden capturada:', order);
                            const paymentDate = new Date(order.create_time).toISOString();

                            const paymentData = {
                                user_id: userId,
                                payment_id: order.id,
                                amount: order.purchase_units[0].amount.value,
                                currency: order.purchase_units[0].amount.currency_code,
                                payer_email: order.payer.email_address,
                                payment_date: order.create_time,
                                payment_status: order.status,
                                payment_method: order.purchase_units[0].soft_descriptor,

                            };
                            console.log("Datos de pago preparados:", paymentData);

                            onPaymentSuccess(paymentData);
                        } catch (error) {
                            console.error('Error al procesar el pago:', error);
                            onPaymentError(error);
                        }
                    },
                    onError: (err) => {
                        console.error('Error en el pago de PayPal:', err);
                        onPaymentError(err);
                    },
                    onCancel: () => {
                        console.log('Pago cancelado por el usuario');
                    }
                })
                .render("#paypal-button-container")
                .then(() => {
                    console.log("Botones de PayPal renderizados correctamente");
                })
                .catch(err => {
                    console.error("Error al renderizar los botones de PayPal:", err);
                    setError("Hubo un problema al cargar el botón de PayPal. Por favor, desactiva cualquier bloqueador de anuncios y recarga la página.");
                });
        }
    }, [loaded, amount, currency, userId, onPaymentSuccess, onPaymentError]);

    if (error) {
        return <div className="alert alert-warning">{error}</div>;
    }

    return (
        <>
            <div id="paypal-button-container"></div>
            <p className="text-muted mt-2" style={{ fontSize: '0.8rem' }}>
                Si tienes problemas para ver el botón de PayPal, por favor desactiva cualquier bloqueador de anuncios y recarga la página.
            </p>
        </>
    );
};