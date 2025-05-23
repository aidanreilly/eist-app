// app/(tabs)/schedule.tsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const dummyData = [
  { time: '08:00', show: 'Soft Starts with Aisling' },
  { time: '12:00', show: 'Brain Food' },
  { time: '16:00', show: 'Mindset Radio Show with CHACHØU' },
  { time: '20:00', show: 'éíst arís' },
]

export default function ScheduleScreen() {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.table}>
        {/* Header */}
        <View style={[styles.row, { backgroundColor: colors.card }]}>
          <Text style={[styles.headerCell, { color: colors.primary }]}>
            Start
          </Text>
          <Text style={[styles.headerCell, { color: colors.primary }]}>
            Show
          </Text>
        </View>

        {/* Rows */}
        {dummyData.map((item, idx) => (
          <View
            key={idx}
            style={[
              styles.row,
              { borderColor: colors.primary },
              idx % 2 === 0 && { backgroundColor: colors.card },
            ]}
          >
            <Text style={[styles.cell, { color: colors.text }]}>
              {item.time}
            </Text>
            <Text style={[styles.cell, { color: colors.text }]}>
              {item.show}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 128,
  },
  table: {
    width: '90%',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0,
  },
  headerCell: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'left',
  },
})
