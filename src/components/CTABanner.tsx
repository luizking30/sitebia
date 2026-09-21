import { useState, useEffect } from 'react'
import { MessageCircle, ChevronLeft, ChevronRight, Clock } from 'lucide-react'

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

function CTABanner() {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [booked, setBooked] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('bookedSlots')
    if (saved) {
      try {
        setBooked(JSON.parse(saved))
      } catch {
        setBooked([])
      }
    }
  }, [])

  // Build calendar grid
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const calendarDays: (Date | null)[] = []
  for (let i = 0; i < firstWeekday; i++) calendarDays.push(null)
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(new Date(viewYear, viewMonth, d))
  }

  const isPast = (date: Date) => {
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    return d < t
  }

  const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()

  const slotKey = (date: Date, time: string) =>
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${time}`

  const isSlotBooked = (date: Date, time: string) =>
    booked.includes(slotKey(date, time))

  const canGoPrev =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth())

  const prevMonth = () => {
    if (!canGoPrev) return
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear(viewYear - 1)
    } else {
      setViewMonth(viewMonth - 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear(viewYear + 1)
    } else {
      setViewMonth(viewMonth + 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const handleSelectDay = (date: Date) => {
    if (isPast(date) || isWeekend(date)) return
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return
    const key = slotKey(selectedDate, selectedTime)
    const newBooked = [...booked, key]
    setBooked(newBooked)
    localStorage.setItem('bookedSlots', JSON.stringify(newBooked))

    const dateStr = selectedDate.toLocaleDateString('pt-BR')
    const message = encodeURIComponent(
      `Olá! Acabei de ver seu site e gostaria de agendar uma consulta para o dia ${dateStr} às ${selectedTime}.`
    )
    window.open(`https://wa.me/5562993818863?text=${message}`, '_blank')
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#c9a96e]/10 via-[#1a1a1a] to-[#c9a96e]/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#c9a96e]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#c9a96e]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Pronta para resolver o seu caso?
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Escolha o melhor dia e horário para a sua consulta. Confirmamos
            tudo pelo WhatsApp.
          </p>
        </div>

        {/* Scheduler Card */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-[#c9a96e]/20 bg-[#1a1a1a]/80 backdrop-blur-sm overflow-hidden">
          {/* Calendar Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-800">
            <button
              onClick={prevMonth}
              disabled={!canGoPrev}
              aria-label="Mês anterior"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                canGoPrev
                  ? 'border-[#c9a96e]/30 text-[#c9a96e] hover:bg-[#c9a96e]/10'
                  : 'border-gray-800 text-gray-700 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <h3 className="font-serif text-xl text-white">
              {MONTHS[viewMonth]} {viewYear}
            </h3>
            <button
              onClick={nextMonth}
              aria-label="Próximo mês"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[#c9a96e]/30 text-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 border-b border-gray-800">
            {WEEKDAYS.map((day) => (
              <div
                key={day}
                className="py-3 text-center text-xs text-gray-500 tracking-wide uppercase"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 p-3 gap-1">
            {calendarDays.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="aspect-square" />
              }
              const disabled = isPast(date) || isWeekend(date)
              const selected = selectedDate && isSameDay(date, selectedDate)
              const isToday = isSameDay(date, today)
              return (
                <button
                  key={date.toISOString()}
                  onClick={() => handleSelectDay(date)}
                  disabled={disabled}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all duration-200 ${
                    selected
                      ? 'bg-gradient-gold text-[#1a1a1a] font-medium shadow-gold'
                      : disabled
                      ? 'text-gray-700 cursor-not-allowed'
                      : isToday
                      ? 'text-[#c9a96e] border border-[#c9a96e]/40 hover:bg-[#c9a96e]/10'
                      : 'text-gray-300 hover:bg-[#c9a96e]/10 hover:text-[#c9a96e]'
                  }`}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="p-5 border-t border-gray-800 animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#c9a96e]" />
                <span className="text-sm text-gray-400">
                  Horários para{' '}
                  <span className="text-[#c9a96e] font-medium">
                    {selectedDate.toLocaleDateString('pt-BR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                {TIME_SLOTS.map((time) => {
                  const isBooked = isSlotBooked(selectedDate, time)
                  const isSelected = selectedTime === time
                  return (
                    <button
                      key={time}
                      onClick={() => !isBooked && setSelectedTime(time)}
                      disabled={isBooked}
                      className={`py-2.5 px-2 rounded-lg text-sm transition-all duration-200 ${
                        isBooked
                          ? 'bg-gray-800/50 text-gray-600 line-through cursor-not-allowed'
                          : isSelected
                          ? 'bg-gradient-gold text-[#1a1a1a] font-medium shadow-gold'
                          : 'border border-gray-700 text-gray-300 hover:border-[#c9a96e]/50 hover:text-[#c9a96e]'
                      }`}
                    >
                      {isBooked ? 'Agendado' : time}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Confirm Button */}
          <div className="p-5 border-t border-gray-800">
            <button
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
              className={`w-full flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm tracking-wide font-medium transition-all duration-300 ${
                selectedDate && selectedTime
                  ? 'bg-gradient-gold text-[#1a1a1a] hover:shadow-gold-lg'
                  : 'bg-gray-800 text-gray-600 cursor-not-allowed'
              }`}
            >
              <MessageCircle size={20} />
              {selectedDate && selectedTime
                ? `Confirmar ${selectedDate.toLocaleDateString('pt-BR')} às ${selectedTime} no WhatsApp`
                : 'Selecione um dia e horário'}
            </button>
            <p className="text-center text-xs text-gray-600 mt-3 font-light">
              Atendimento de segunda a sexta, presencial em Brasília/DF ou online.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
