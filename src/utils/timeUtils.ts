import type { Zero2TwentyThreeType } from './Zero2TwentyThreeType'

/**
 * 指定された時間が指定された範囲内にあるかどうかをチェックする
 *
 * 終了時刻は範囲外とする
 * 終了時刻が開始時刻よりも前の場合は、終了時刻が翌日の時刻として扱う
 *
 * @param targetTime - チェックする時間
 * @param startTime - 時間範囲の開始時刻
 * @param endTime - 時間範囲の終了時刻
 * @returns 入力された時間が範囲内にある場合はtrueを返却
 */
export function isTimeInRange(
  targetTime: Zero2TwentyThreeType,
  startTime: Zero2TwentyThreeType,
  endTime: Zero2TwentyThreeType,
): boolean {
  if (startTime <= endTime) {
    return targetTime >= startTime && targetTime < endTime
  } else {
    return targetTime >= startTime || targetTime < endTime
  }
}
