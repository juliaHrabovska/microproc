package ua.hnu.microproc;

import jssc.SerialPort;
import jssc.SerialPortEvent;
import jssc.SerialPortEventListener;
import jssc.SerialPortException;

public class Test {
    private static String answer;
    private static SerialPort serialPort;

    public static String clear() {
        serialPort = new SerialPort("COM3"); /*Передаем в конструктор суперкласса имя порта с которым будем работать*/
        try {
            serialPort.openPort(); /*Метод открытия порта*/
            serialPort.setParams(SerialPort.BAUDRATE_9600, SerialPort.DATABITS_8, SerialPort.STOPBITS_2, SerialPort.PARITY_NONE); /*Задаем основные параметры протокола UART*/
            serialPort.setEventsMask(SerialPort.MASK_RXCHAR); /*Устанавливаем маску или список события на которые будет происходить реакция. В данном случае это приход данных в буффер порта*/
            serialPort.addEventListener(new EventListener()); /*Передаем экземпляр класса EventListener порту, где будет обрабатываться события. Ниже описан класс*/

            byte[] bytes = {67, 76, 82, 45, 77, 59};
            serialPort.writeBytes(bytes);
            while (answer == null) {
                Thread.sleep(1000);
            }

//            serialPort.writeString("43 4C 52 2D 4D 3B");

        } catch (SerialPortException ex) {
            System.out.println(ex);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return answer;
    }

    private static class EventListener implements SerialPortEventListener { /*Слушатель срабатывающий по появлению данных на COM-порте*/
        public void serialEvent(SerialPortEvent event) {
            if (event.isRXCHAR() && event.getEventValue() > 0) { /*Если происходит событие установленной маски и количество байтов в буфере более 0*/
                try {
                    String data = serialPort.readHexString(event.getEventValue()); /*Создаем строковую переменную  data, куда и сохраняем данные*/
                    answer = data;
                    System.out.print(data);/*Выводим данные на консоль*/
                } catch (SerialPortException ex) {
                    System.out.println(ex);
                }
            }
        }
    }
}