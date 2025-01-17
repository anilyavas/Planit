import DateTimeSection from '@/components/DateTimeSection';
import { router, Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';

export default function Update() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [dueTime, setDueTime] = useState<Date>(new Date());
  const [status, setStatus] = useState<string>('');
  const [updateTaskSuccess, setUpdateTaskSuccess] = useState<boolean>();

  const handleUpdate = () => {};

  return (
    <View className='bg-slate-200 flex-1'>
      <Stack.Screen
        options={{
          headerBackVisible: true,
          headerShown: true,
          title: 'Create Task',
          headerStyle: { backgroundColor: '#E2E8F0' },
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text className='font-semibold text-2xl pl-4 pt-4'>Task Title</Text>
          <TextInput
            className='border border-gray-300 p-3 m-4 rounded-xl'
            value={title}
            onChangeText={setTitle}
            placeholder='Title'
            maxLength={50}
          />
        </View>

        {/* Category */}

        <View className='pt-2 p-2'>
          <Text className='font-semibold text-xl pl-2'>Category</Text>
          <View className='flex-row p-2 justify-around gap-1'>
            {['Education', 'Work', 'Groceries'].map((category) => (
              <Pressable
                key={category}
                className={`p-4 rounded-xl w-1/3 ${
                  status === category ? 'bg-purple-600' : 'bg-purple-400'
                }`}
                onPress={() => setStatus(category)}
              >
                <Text className='text-white font-semibold text-center'>
                  {category}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Date & Time Section */}
        <View className='p-4'>
          <DateTimeSection
            onDateTimeChange={({ dueDate, dueTime }) => {
              setDueDate(dueDate);
              setDueTime(dueTime);
            }}
          />
        </View>

        <View>
          <Text className='pl-4 pt-2 font-semibold text-xl'>Description</Text>
          <TextInput
            placeholder='Description'
            value={description}
            onChangeText={setDescription}
            className='border border-gray-300 p-3 m-2 rounded-xl'
            maxLength={150}
            multiline
          />
        </View>

        <View className='items-center p-3'>
          <Pressable
            className='bg-purple-600 p-4 rounded-lg w-full'
            onPress={() => {
              handleUpdate();
              {
                updateTaskSuccess && router.back();
              }
            }}
          >
            <Text className='text-white font-semibold text-center text-xl'>
              Create Task
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
